import { Student } from "./Student";
import "./studentList.css";

import { MainContext } from "../../../context/MainContext"
import { useContext } from "react";


export function StudentList() {

    let { studentList } = useContext(MainContext);



    let key = 1;
    return <>
        <div id="listContainer">
            <div id="StudenListTitle">Lista de estudiantes de la sección</div>
            <div id="studentListContaner">

                <table>
                    <thead>
                        <tr className="tableHead">
                            <th>N°</th>
                            <th>Cédula</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>L1</th>
                            <th>L2</th>
                            <th>L3</th>
                            <th>Def</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentList.map(student => <Student data = {student} key={key++} number={key}/> )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
}