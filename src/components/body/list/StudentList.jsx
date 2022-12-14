import { Student } from "./Student";
import "./studentList.css";

import { MainContext } from "../../../context/MainContext"
import { useContext } from "react";
import { useEffect } from "react";



export function StudentList() {

    let { studentList, setSlectedStudent, activeSeccion } = useContext(MainContext);


    function handleClick(e) {
        let index = e.target.parentElement.id.replace("index-", "");
        if (index === "") {
            return
        }
        setSlectedStudent(index);
    }

  
    useEffect(() => {
        let selected = document.getElementsByClassName("selected");
        function handleKeyDownUp(e){
            if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                let index;
                if (e.key === "ArrowDown") {
                    let nextElement = selected[0].nextSibling;
                    if (nextElement !== null) {
                        index = nextElement.id.replace("index-", "");
                    }
                }
                if (e.key === "ArrowUp") {
                    let previusElement = selected[0].previousSibling;
                    if (previusElement !== null) {
                        index = previusElement.id.replace("index-", "");
                    }
                }
                if (index !== undefined) {
                    /*eslint-disable*/
                    setSlectedStudent(index);
                }
            }
        }
            if(studentList.length > 0){
                setSlectedStudent(1);//selecciona el primer estudiante al cargar este elemento
            }
            
            window.addEventListener("keydown", handleKeyDownUp)
        
        return () => {
         
            window.removeEventListener("keydown", handleKeyDownUp)
        }

    }, [studentList])


    let key = 1;

    if(activeSeccion === undefined){
        <div id="listContainer"></div>

    }else if (studentList.length > 0) {
        return <>
            <div id="listContainer">
                <div id="StudenListTitle">Lista de estudiantes de la secci??n</div>
                <div id="studentListContaner">

                    <table onClick={handleClick}>
                        <thead>
                            <tr className="tableHead">
                                <th>N??</th>
                                <th>C??dula</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>L1</th>
                                <th>L2</th>
                                <th>L3</th>
                                <th>Def</th>
                            </tr>
                        </thead>
                        <tbody id="tableList">
                            {
                                studentList.map(student => <Student seccion={activeSeccion} data={student} key={key++} number={key} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    } else {
        return <>
            <div id="listContainer">
                <div id="StudenListTitle">No se han encontado estudiantes en esta secci??n</div>
                <div id="studentListContaner">

                    <table>
                        <thead>
                            <tr className="tableHead">
                                <th>N??</th>
                                <th>C??dula</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>L1</th>
                                <th>L2</th>
                                <th>L3</th>
                                <th>Def</th>
                            </tr>
                        </thead>
                        <tbody id="tableList">
                            <tr>
                                <td colSpan="8">
                                    <h4>
                                        No hay estudiantes inscritos en esa secci??n
                                    </h4>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    }
}