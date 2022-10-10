import { Student } from "./Student";
import "./studentList.css";

import { MainContext } from "../../../context/MainContext"
import { useContext } from "react";
import { useEffect } from "react";


export function StudentList() {

    let { studentList, setSlectedStudent } = useContext(MainContext);

    function handleClick(e){
       let index = e.target.parentElement.id.replace("index-", "");
        if(index === ""){
            return
        }
       setSlectedStudent(index);
    }

    useEffect(()=>{
        setSlectedStudent(1);//selecciona el primer estudiante al cargar este elemento
        window.addEventListener("keydown", e=>{


            if(e.key === "ArrowDown" || e.key === "ArrowUp"){
                let selected = document.getElementsByClassName("selected");
                let index;
                
                if(e.key === "ArrowDown"){ 
                    let nextElement = selected[0].nextSibling;
                    if(nextElement !== null){
                        index = nextElement.id.replace("index-", "");
                    }
                }
                if(e.key === "ArrowUp"){ 
                    let previusElement = selected[0].previousSibling;
                    if(previusElement !== null){
                        index = previusElement.id.replace("index-", "");
                    }
                    
                }
               if(index !== undefined){
                    /*eslint-disable*/
                    setSlectedStudent(index);
                    /*eslint-disable*/
                }
            }
        })

    },[])


    let key = 1;
    return <>
        <div id="listContainer">
            <div id="StudenListTitle">Lista de estudiantes de la sección</div>
            <div id="studentListContaner">

                <table onClick={handleClick}>
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
                    <tbody id="tableList">
                        {
                            studentList.map(student => <Student data = {student} key={key++} number={key}/> )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
}