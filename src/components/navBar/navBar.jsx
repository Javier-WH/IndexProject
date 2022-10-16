import "./navBar.css";
import { MainContext } from "../../context/MainContext"
import { SubjectMenu } from "./subjectMenu/SubjectMenu";
import { MainMenu } from "./mainMenu/MainMenu"
import Logo from "./logo.svg"

import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Tooltip from '@mui/material/Tooltip';
import { useContext, useRef } from "react";


import ReactToPrint from "react-to-print";


export function NavBar() {

    const { SaveData, studentList } = useContext(MainContext)

    const componentRef = useRef();

    let iconsStyle = {
        fontSize: 50,
        color: "white"
    }

    let key = 1;
    return <>

        <div id="NavBar">
            <div id="navBarContainer" >
                <MainMenu />
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
                        <div className="printTitle">U.E. Colegio Batalla de la Victoria</div>
                        <div className="printTitle">Asignatura: Física</div>
                        <div className="printTitle">Sección: 3B</div>
                        <div className="printTitle">Profesor: Antonio Magallanes</div>
                        <div className="printTitle">Periodo escolar 2022 - 2023</div>
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
                        </tr>
                    </thead>
                    <tbody>

                        {
                            studentList.map(student => {
                                return <tr key={key++}>
                                    <td>{key}</td>
                                    <td>{student.ci}</td>
                                    <td>{`${student.names} ${student.lastNames}`}</td>
                                    <td>@mdo</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            })
                        }


                    </tbody>
                </table>

                {
                    studentList.map(student => {
                        return <div>Hola</div>
                    })
                }

            </div>
        </div>
    </>
}