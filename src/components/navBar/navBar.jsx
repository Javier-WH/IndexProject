import "./navBar.css";
import { MainContext } from "../../context/MainContext"
import { SubjectMenu } from "./subjectMenu/SubjectMenu";
import { MainMenu } from "./mainMenu/MainMenu"
import Logo from "../../logo.svg"

import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Tooltip from '@mui/material/Tooltip';
import { useContext, useEffect, useRef } from "react";


import ReactToPrint from "react-to-print";
import { useState } from "react";


export function NavBar() {

    const { SaveData, studentList, activeSeccion } = useContext(MainContext)

    const componentRef = useRef();

    const [printInstitution, setPrintInstitution] = useState("")
    const [printSubject, setPrintSubjects] = useState("")
    const [printSeccion, setPrintSeccions] = useState("")
    const [printPeriod, setPrintPeriod] = useState("")
    const [printTeacherName, setPrintTeacerName] = useState("")

    let iconsStyle = {
        fontSize: 50,
        color: "white"
    }

    function translateGrades(student) {
        try {
            let grades = student.subjects[activeSeccion.split(" ")[0]];
            let l1 = grades.lap1;
            let l2 = grades.lap2;
            let l3 = grades.lap3;
            let def = grades.def;
            return <>
                <td>{l1}</td>
                <td>{l2}</td>
                <td>{l3}</td>
                <td>{def}</td>
            </>
        } catch (error) {
            
        }

    }

    useEffect(()=>{
        /*eslint-disable*/
        try {

            fetch("/config").then(res=> res.json())
            .then(conf=>{
                setPrintInstitution(conf.institutionName);
            })
            .catch(err=> console.log(err));
            
            setPrintSubjects( activeSeccion.substring(0, activeSeccion.length -4));
            setPrintSeccions(activeSeccion.substring(activeSeccion.length -3))
            setPrintPeriod(document.getElementById("dataTitleSchoolYear").innerText);
           
        } catch (error) {
            
        }
    })


    let key = 1;
    return <>

        <div id="NavBar">
            <div id="navBarContainer" >
                <MainMenu  setPrintTeacerName = {setPrintTeacerName}/>
                <div id="iconsContainer">
                    <ReactToPrint
                        trigger={() => <Tooltip title="Imprimir Nomina" arrow>
                            <LocalPrintshopIcon className="NavBarIcon" sx={iconsStyle} />
                        </Tooltip>}
                        content={() => componentRef.current}
                    />

                    <Tooltip title="Guardar Cambios" arrow>
                        <SaveOutlinedIcon className="NavBarIcon" sx={iconsStyle} onClick={SaveData} />
                    </Tooltip>
                    <SubjectMenu sx={iconsStyle} />
                </div>
            </div>
        <div id="print" ref={componentRef}>
            <div id="printTitleContainer">
                <img src={Logo} alt="" id="printLogo" />
                <div>
                    <div className="printTitle">{printInstitution}</div>
                    <div className="printTitle">Asignatura: {printSubject}</div>
                    <div className="printTitle">Sección: {printSeccion}</div>
                    <div className="printTitle">Profesor: {printTeacherName}</div>
                    <div className="printTitle">{printPeriod}</div>
                </div>
            </div>

            <table id="printTable">
                <thead id="printThead">
                    <tr>
                        <th scope="col">N°</th>
                        <th scope="col">Cédula</th>
                        <th scope="col">Nombres y Apellidos</th>
                        <th scope="col">1er Lapso</th>
                        <th scope="col">2do Lapso</th>
                        <th scope="col">3er Lapso</th>
                        <th scope="col">def</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentList.map(student => {
                            return <tr key={key++}>
                                <td>{key}</td>
                                <td>{student.ci}</td>
                                <td>{`${student.names} ${student.lastNames}`}</td>
                                {translateGrades(student)}
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>

        </div>

    </>
}