import { useState, useEffect, useContext } from "react";
import { MainContext } from "../../../context/MainContext.jsx";
import { getSubjectName, getSchoolYear, getSeccionName } from "../../../libraries/translateSeccionNames.js";
import EvaluationPlanConfig from "./evaluationPllanConfig/EvaluationPlanConfig"



export default function EvaluationPlan({ studentName, studentCI, lap1, lap2, lap3 }) {
    const { dataToSave, selectedStudent, activeSeccion, getSchoolPeriod, pushNewData, studentList } = useContext(MainContext)



    //el del profesor
    const [evalData, setEvalData] = useState({
        lap1: [25, 25, 25, 25, 0, 0],
        lap2: [25, 25, 25, 25, 0, 0],
        lap3: [25, 25, 25, 25, 0, 0],
        count: [4, 4, 4]
    })
    //el estudiante
    const [stdGrades, setStdGrades] = useState({
        lap1: [0, 0, 0, 0, 0, 0],
        lap2: [0, 0, 0, 0, 0, 0],
        lap3: [0, 0, 0, 0, 0, 0]

    })

    //////

    useEffect(() => {
        setL1def(lap1);
        setL2def(lap2);
        setL3def(lap3);


    }, [lap1, lap2, lap3])



    ////


    useEffect(() => {
        async function getTeacher() {
            let pullTeacherData = await fetch("/getUserName");
            let teacherData = await pullTeacherData.json()
            let teacherId = teacherData.id;

            let grade = getSchoolYear(activeSeccion);
            let subjecName = getSubjectName(activeSeccion);
            let seccionName = getSeccionName(activeSeccion);


            let pullEvalData = await fetch("/getEvalPlan", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                },
                body: JSON.stringify({ teacherId, grade, subjecName, seccionName })
            });
            let _evalData = await pullEvalData.json();
            if(pullEvalData.status === 200){
                setEvalData(_evalData)

            }

        }
        getTeacher();
    }, [activeSeccion])


    /////////

    const [l1G1, setL1G1] = useState(0)
    const [l1G2, setL1G2] = useState(0)
    const [l1G3, setL1G3] = useState(0)
    const [l1G4, setL1G4] = useState(0)
    const [l1G5, setL1G5] = useState(0)
    const [l1G6, setL1G6] = useState(0)

    const [l2G1, setL2G1] = useState(0)
    const [l2G2, setL2G2] = useState(0)
    const [l2G3, setL2G3] = useState(0)
    const [l2G4, setL2G4] = useState(0)
    const [l2G5, setL2G5] = useState(0)
    const [l2G6, setL2G6] = useState(0)

    const [l3G1, setL3G1] = useState(0)
    const [l3G2, setL3G2] = useState(0)
    const [l3G3, setL3G3] = useState(0)
    const [l3G4, setL3G4] = useState(0)
    const [l3G5, setL3G5] = useState(0)
    const [l3G6, setL3G6] = useState(0)

    const [l1def, setL1def] = useState(0)
    const [l2def, setL2def] = useState(0)
    const [l3def, setL3def] = useState(0)


    useEffect(() => {
        
        if(selectedStudent === undefined){
            return
        }
        try {

            async function getEval() {
                let pull = await fetch("/getStdEval", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "*/*"
                    },
                    body: JSON.stringify({
                        section: getSeccionName(activeSeccion),
                        schoolYear: getSchoolYear(activeSeccion),
                        stdid: selectedStudent.id
                    })
                });
                let evalPlanData = await pull.json();
                
                let evalLap1;
                let evalLap2;
                let evalLap3;
                
                if(evalPlanData.length > 0){
                    evalLap1 = evalPlanData[0].stdGrades.lap1;
                    evalLap2 = evalPlanData[0].stdGrades.lap2;
                    evalLap3 = evalPlanData[0].stdGrades.lap3;
                }else{
                  evalLap1 = [0,0,0,0,0,0]  
                  evalLap2 = [0,0,0,0,0,0]  
                  evalLap3 = [0,0,0,0,0,0]  
                }

                setStdGrades({
                    lap1: evalLap1,
                    lap2: evalLap2,
                    lap3: evalLap3
            
                })

                setL1G1(evalLap1[0]);
                setL1G2(evalLap1[1]);
                setL1G3(evalLap1[2]);
                setL1G4(evalLap1[3]);
                setL1G5(evalLap1[4]);
                setL1G6(evalLap1[5]);

                setL2G1(evalLap2[0]);
                setL2G2(evalLap2[1]);
                setL2G3(evalLap2[2]);
                setL2G4(evalLap2[3]);
                setL2G5(evalLap2[4]);
                setL2G6(evalLap2[5]);

                setL3G1(evalLap3[0]);
                setL3G2(evalLap3[1]);
                setL3G3(evalLap3[2]);
                setL3G4(evalLap3[3]);
                setL3G5(evalLap3[4]);
                setL3G6(evalLap3[5]);

            }
            getEval();
        } catch (error) {

        }
    }, [selectedStudent])


    function handleChangeGrade(value, lap, index) {

        eval(`setL${lap}G${index}`)(value)


        let _stdGrades = stdGrades;
        _stdGrades[`lap${lap}`][index - 1] = value;
        setStdGrades(_stdGrades);

        calculateDef();

    }
    /////////////////////////
    function calculateDef() {

        let l1n1 = (Number.parseFloat(evalData.lap1[0]) * Number.parseFloat(stdGrades.lap1[0])) / 100
        let l1n2 = (Number.parseFloat(evalData.lap1[1]) * Number.parseFloat(stdGrades.lap1[1])) / 100
        let l1n3 = (Number.parseFloat(evalData.lap1[2]) * Number.parseFloat(stdGrades.lap1[2])) / 100
        let l1n4 = (Number.parseFloat(evalData.lap1[3]) * Number.parseFloat(stdGrades.lap1[3])) / 100
        let l1n5 = (Number.parseFloat(evalData.lap1[4]) * Number.parseFloat(stdGrades.lap1[4])) / 100
        let l1n6 = (Number.parseFloat(evalData.lap1[5]) * Number.parseFloat(stdGrades.lap1[5])) / 100
        let l1total = 0;

        if (!isNaN(l1n1)) {
            l1total += l1n1;
        }
        if (!isNaN(l1n2)) {
            l1total += l1n2;
        }
        if (!isNaN(l1n3)) {
            l1total += l1n3;
        }
        if (!isNaN(l1n4)) {
            l1total += l1n4;
        }
        if (!isNaN(l1n5)) {
            l1total += l1n5;
        }
        if (!isNaN(l1n6)) {
            l1total += l1n6;
        }
        setL1def(l1total)

        ///////////////////////////////lapso2

        let l2n1 = (Number.parseFloat(evalData.lap2[0]) * Number.parseFloat(stdGrades.lap2[0])) / 100
        let l2n2 = (Number.parseFloat(evalData.lap2[1]) * Number.parseFloat(stdGrades.lap2[1])) / 100
        let l2n3 = (Number.parseFloat(evalData.lap2[2]) * Number.parseFloat(stdGrades.lap2[2])) / 100
        let l2n4 = (Number.parseFloat(evalData.lap2[3]) * Number.parseFloat(stdGrades.lap2[3])) / 100
        let l2n5 = (Number.parseFloat(evalData.lap2[4]) * Number.parseFloat(stdGrades.lap2[4])) / 100
        let l2n6 = (Number.parseFloat(evalData.lap2[5]) * Number.parseFloat(stdGrades.lap2[5])) / 100
        let l2total = 0;

        if (!isNaN(l2n1)) {
            l2total += l2n1;
        }
        if (!isNaN(l2n2)) {
            l2total += l2n2;
        }
        if (!isNaN(l2n3)) {
            l2total += l2n3;
        }
        if (!isNaN(l2n4)) {
            l2total += l2n4;
        }
        if (!isNaN(l2n5)) {
            l2total += l2n5;
        }
        if (!isNaN(l2n6)) {
            l2total += l2n6;
        }
        setL2def(l2total)

        ///////////////lapso3
        let l3n1 = (Number.parseFloat(evalData.lap3[0]) * Number.parseFloat(stdGrades.lap3[0])) / 100
        let l3n2 = (Number.parseFloat(evalData.lap3[1]) * Number.parseFloat(stdGrades.lap3[1])) / 100
        let l3n3 = (Number.parseFloat(evalData.lap3[2]) * Number.parseFloat(stdGrades.lap3[2])) / 100
        let l3n4 = (Number.parseFloat(evalData.lap3[3]) * Number.parseFloat(stdGrades.lap3[3])) / 100
        let l3n5 = (Number.parseFloat(evalData.lap3[4]) * Number.parseFloat(stdGrades.lap3[4])) / 100
        let l3n6 = (Number.parseFloat(evalData.lap3[5]) * Number.parseFloat(stdGrades.lap3[5])) / 100
        let l3total = 0;

        if (!isNaN(l3n1)) {
            l3total += l3n1;
        }
        if (!isNaN(l3n2)) {
            l3total += l3n2;
        }
        if (!isNaN(l3n3)) {
            l3total += l3n3;
        }
        if (!isNaN(l3n4)) {
            l3total += l3n4;
        }
        if (!isNaN(l3n5)) {
            l3total += l3n5;
        }
        if (!isNaN(l3n6)) {
            l3total += l3n6;
        }
        setL3def(l3total)

        prepareDataToSave(l1total, l2total, l3total);
    }

    function prepareDataToSave(l1, l2, l3) {
        let objectName = `id-${selectedStudent.id}`

        let dataToSave1 = {
            name: objectName,
            [objectName]: {
                id: selectedStudent.id,
                session: activeSeccion,
                l1,
                l2,
                l3
            }
        }

        dataToSave1.evalPlan = {
            stdid: selectedStudent.id,
            stdGrades,
            section: getSeccionName(activeSeccion),
            schoolYear: getSchoolYear(activeSeccion),
            failded: 0,
            status: 0
        }

        pushNewData(dataToSave1);

    }




    return <>
        <div id="dataTitleContainer"  >
            <div id="dataTitle">{`${getSubjectName(activeSeccion)} (${getSchoolYear(activeSeccion)} ${getSeccionName(activeSeccion)})`}</div>
            <div id="dataTitleSchoolYear">{getSchoolPeriod()}</div>
            <div id="evalPlanTitleAuxContainer">
                <div id="dataEvalPlanNameContainer">
                    <div id="stdName">{studentName}</div>
                    <div id="stdCi">{studentCI}</div>
                </div>
                <EvaluationPlanConfig evalData={evalData} setEvalData={setEvalData} />
            </div>
        </div>

        <div id="evalPlanContainer">
            <div className="evalPlanLapseTitle"> Primer Lapso</div>
            <div className="lapsePlanContainer">
                {
                    evalData.lap1.map((percent, i) => {
                        if (percent !== 0) {
                            return <div className="evalGradeContainer" key={i}>

                                <div className="evalGradePercent">
                                    {`${percent}%`}
                                </div>
                                <div className="evalGradeGrade">
                                    <input className="evalGradeinput" type="number" value={eval(`l1G${i + 1}`)} onChange={e => handleChangeGrade(e.target.value, 1, i + 1)} />
                                </div>

                            </div>
                        }
                        return null
                    })
                }

                <div className="evalGradeContainer evalPalLapseTotal">

                    <div className="evalGradePercent">
                        {
                            evalData.lap1.reduce(
                                (accumulator, currentValue) => accumulator + currentValue
                            )
                        }%
                    </div>
                    <div className="evalGradeGrade evalGradetotal">
                        {l1def}
                    </div>

                </div>

            </div>

            <div className="evalPlanLapseTitle"> Segundo Lapso</div>
            <div className="lapsePlanContainer">
                {
                    evalData.lap2.map((percent, i) => {
                        if (percent !== 0) {
                            return <div className="evalGradeContainer" key={i}>

                                <div className="evalGradePercent">
                                    {`${percent}%`}
                                </div>
                                <div className="evalGradeGrade">
                                    <input className="evalGradeinput" type="number" value={eval(`l2G${i + 1}`)} onChange={e => handleChangeGrade(e.target.value, 2, i + 1)} />
                                </div>

                            </div>
                        }
                        return null
                    })
                }

                <div className="evalGradeContainer evalPalLapseTotal">

                    <div className="evalGradePercent">
                        {
                            evalData.lap2.reduce(
                                (accumulator, currentValue) => accumulator + currentValue
                            )
                        }%
                    </div>
                    <div className="evalGradeGrade evalGradetotal">
                        {l2def}
                    </div>

                </div>

            </div>


            <div className="evalPlanLapseTitle"> Tercer Lapso</div>
            <div className="lapsePlanContainer">
                {
                    evalData.lap3.map((percent, i) => {
                        if (percent !== 0) {
                            return <div className="evalGradeContainer" key={i}>

                                <div className="evalGradePercent">
                                    {`${percent}%`}
                                </div>
                                <div className="evalGradeGrade">
                                    <input className="evalGradeinput" type="number" value={eval(`l3G${i + 1}`)} onChange={e => handleChangeGrade(e.target.value, 3, i + 1)} />
                                </div>

                            </div>
                        }
                        return null
                    })
                }

                <div className="evalGradeContainer evalPalLapseTotal">

                    <div className="evalGradePercent">
                        {
                            evalData.lap3.reduce(
                                (accumulator, currentValue) => accumulator + currentValue
                            )
                        }%
                    </div>
                    <div className="evalGradeGrade evalGradetotal">
                        {l3def}
                    </div>

                </div>

            </div>


        </div>


    </>
}