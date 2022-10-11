import "./dataName.css";
import TextField from '@mui/material/TextField';
import { useContext, useState } from "react";
import { MainContext } from "../../../context/MainContext"
import { useEffect } from "react";

import { OpenModal } from "../../modal/Modal"



export function DataName() {

    const { selectedStudent, activeSeccion, getSchoolPeriod, pushNewData } = useContext(MainContext)

    const [studentName, setStudentName] = useState("");
    const [studentCI, setStudentCI] = useState("");
    const [lap1, setLap1] = useState("");
    const [lap2, setLap2] = useState("");
    const [lap3, setLap3] = useState("");
    const [def, setDef] = useState("");
    const [modal, setModal] = useState({ state: false })

    function handleNameChange(event) {
        setStudentName(event.target.value);
    };
    function handlePassChange(event) {
        setStudentCI(event.target.value);
    };

    function handleLap1Change(event) {
        let value = event.target.value;
        if (value <= 20 && value >= 0) {
            setLap1(value);
            let objectName = `id-${selectedStudent.id}`;
            let dataToSave = {
                name: objectName,
                [objectName]: {
                    id: selectedStudent.id,
                    session: activeSeccion,
                    l1: value
                }
            }
            pushNewData(dataToSave);
        }
    };

    function handleLap2Change(event) {
        let value = event.target.value;
        if (value <= 20 && value >= 0) {
            setLap2(value);
            let objectName = `id-${selectedStudent.id}`;
            let dataToSave = {
                name: objectName,
                [objectName]: {
                    id: selectedStudent.id,
                    session: activeSeccion,
                    l2: value
                }
            }
            pushNewData(dataToSave);
        }
    };

    function handleLap3Change(event) {
        let value = event.target.value;
        if (value <= 20 && value >= 0) {
            setLap3(value);
            let objectName = `id-${selectedStudent.id}`;
            let dataToSave = {
                name: objectName,
                [objectName]: {
                    id: selectedStudent.id,
                    session: activeSeccion,
                    l3: value
                }
            }
            pushNewData(dataToSave);

        }
    };





    function lapLostFocus(event) {
        let value = event.target.value;
        if (value === "") {
            if (event.target.id === "lap1") {
                setLap1(0);
            }
            if (event.target.id === "lap2") {
                setLap2(0);
            }
            if (event.target.id === "lap3") {
                setLap3(0);
            }
        }
        if (value < 10 && value.length < 2) {
            if (event.target.id === "lap1") {
                setLap1("0" + value);
            }
            if (event.target.id === "lap2") {
                setLap2("0" + value);
            }
            if (event.target.id === "lap3") {
                setLap3("0" + value);
            }
        }


    }

    useEffect(() => {
        try {
            let subjet = activeSeccion.split(" ")[0];
            let grades = selectedStudent.subjects[subjet];

            setLap1(grades.lap1);
            setLap2(grades.lap2);
            setLap3(grades.lap3);
            setDef(grades.def);
        } catch (error) {
            setLap1(0);
            setLap2(0);
            setLap3(0);
            setDef(0);
        }
        try {
            setStudentName(`${selectedStudent.names} ${selectedStudent.lastNames}`)
            setStudentCI(selectedStudent.ci)
        } catch (error) {
            setStudentName("")
            setStudentCI("")
        }

    }, [selectedStudent, activeSeccion])

    if ((activeSeccion === undefined)) {
        return <div id="dataName"> Debe seleccionar una sección para iniciar</div>
    } else if (document.getElementById(`index-1`) === null) {
        return <div id="dataName">No se han encontrado estudiantes en inscritos en esta sección</div>
    } else {
        return <>
            <OpenModal modal={modal} setModal={setModal} />
            <div id="dataName">
                <div id="dataTitleContainer">
                    <div id="dataTitle">{activeSeccion}</div>
                    <div id="dataTitleSchoolYear">{getSchoolPeriod()}</div>
                </div>
                <div id="studentDataContainer">
                    <div id="studentPhoto"></div>
                    <div id="auxStudenName">
                        <TextField id="studentName" className="studentInput" label="Nombre del Alumno" variant="outlined" value={studentName} onChange={handleNameChange} spellCheck="false" />
                        <TextField id="studentCi" className="studentInput" label="Cédula del Alumno" variant="outlined" value={studentCI} onChange={handlePassChange} spellCheck="false" />
                    </div>
                </div>
                <div id="studenGradesContainer">
                    <div className="studenLapse">
                        <div className="lblLapse">Primer Lapso</div>
                        <input type="number" id="lap1" className="lapInput" value={lap1} onChange={handleLap1Change} onBlur={lapLostFocus} spellCheck="false" />
                    </div>
                    <div className="studenLapse">
                        <div className="lblLapse">Segundo Lapso</div>
                        <input type="number" id="lap2" className="lapInput" value={lap2} onChange={handleLap2Change} onBlur={lapLostFocus} spellCheck="false" />
                    </div>
                    <div className="studenLapse">
                        <div className="lblLapse">Tercer Lapso</div>
                        <input type="number" id="lap3" className="lapInput" value={lap3} onChange={handleLap3Change} onBlur={lapLostFocus} spellCheck="false" />
                    </div>
                </div>
                <div id="studentDefContainer">
                    <div>Acumulado / Definitiva</div>
                    <div id="studentDef">{def}</div>
                </div>
            </div>
        </>
    }
}

