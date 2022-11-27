import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import { MainContext } from "../../../../context/MainContext"
import { getSchoolYear, getSeccionName, getSubjectName } from "../../../../libraries/translateSeccionNames"
import { useState } from 'react';

export default function DenseTable({ evalData, setEvalData, evalCount, lapse, setEvalPercent }) {

    const { activeSeccion } = React.useContext(MainContext)

    const [teacherId, setTeacherId] = useState(0);

    /*eslint-disable*/
    const [eval1P, setEval1P] = React.useState(1);
    const [eval2P, setEval2P] = React.useState(2);
    const [eval3P, setEval3P] = React.useState(3);
    const [eval4P, setEval4P] = React.useState(4);
    const [eval5P, setEval5P] = React.useState(5);
    const [eval6P, setEval6P] = React.useState(6);

    //obtiene datos del profesor
    React.useEffect(() => {
        async function getTeacher() {
            let pullTeacherData = await fetch("/getUserName");
            let teacherData = await pullTeacherData.json()
            let _teacherId = teacherData.id;
            setTeacherId(_teacherId);
        }
        getTeacher();
    }, [])

   


    //cambia las notas dependiendo el lapso escogido
    React.useEffect(() => {
        try {
            setEval1P(evalData[lapse][0])
            setEval2P(evalData[lapse][1])
            setEval3P(evalData[lapse][2])
            setEval4P(evalData[lapse][3])
            setEval5P(evalData[lapse][4])
            setEval6P(evalData[lapse][5])
        } catch (error) {

        }

    }, [lapse])

    React.useEffect(() => {

        let total = Number.parseFloat(eval1P) + Number.parseFloat(eval2P) + Number.parseFloat(eval3P) + Number.parseFloat(eval4P) + Number.parseFloat(eval5P) + Number.parseFloat(eval6P);

        setEvalPercent(total)

    }, [eval1P, eval2P, eval3P, eval4P, eval5P, eval6P])

    /*
    {
        lap1: [25, 14, 10, 0, 0, 0],
        lap2: [21, 25, 25, 25, 0, 0],
        lap3: [10, 10, 10, 10, 10, 10],
        count: [4, 6, 5]
    }
    */

    async function saveEvalPlan() {
        try {
            let newData = evalData;
            newData[lapse] = [Number.parseFloat(eval1P), Number.parseFloat(eval2P), Number.parseFloat(eval3P), Number.parseFloat(eval4P), Number.parseFloat(eval5P), Number.parseFloat(eval6P)];

            if (lapse === "lap1") {
                newData.count[0] = evalCount.length;
            }
            if (lapse === "lap2") {
                newData.count[1] = evalCount.length;
            }
            if (lapse === "lap3") {
                newData.count[2] = evalCount.length;
            }



            for (let i = 0; i <= 6; i++) {
                if (i > evalCount.length) {

                    newData[lapse][i - 1] = 0
                }
            }


            setEvalData([])
            setEvalData(newData);


            //////////////////////////////////envio al server

            /*let pullTeacherData = await fetch("/getUserName");
            let teacherData = await pullTeacherData.json()
            let teacherId = teacherData.id;*/

            let grade = getSchoolYear(activeSeccion);
            let subjecName = getSubjectName(activeSeccion);
            let seccionName = getSeccionName(activeSeccion)

            let data = {
                teacherId,
                grade,
                subjecName,
                seccionName,
                evalPlan: newData
            }

            let push = await fetch("/evalPlan", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                },
                body: JSON.stringify(data)
            })




        } catch (error) {

        }
    }




    return <div style={{ position: "relative" }}>
        <Button variant="outlined" id='btnSaveEvalPlan' onClick={saveEvalPlan}><SaveIcon /></Button>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {
                            evalCount.map(i => <TableCell align="center" sx={{ color: "white", fontSize: "12px" }}>{`Evaluación ${i}`}</TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>

                    <TableRow className='EvaluationTableRowRow'>
                        {
                            evalCount.map(i => <TableCell align="center" sx={{ fontSize: "12px" }} className="EvaluationTableRow">
                                {/*eslint-disable*/}
                                <input value={eval(`eval${i}P`)} onChange={e => eval(`setEval${i}P`)(e.target.value)} className="EvaluationTableInput" />
                                %
                            </TableCell>)

                        }
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    </div>
}