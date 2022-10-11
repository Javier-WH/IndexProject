import { createContext, useState } from "react";
import {fakeSeccion} from "./seccionsJSONtest";
import {getStudent} from "../fetch/fetchStudents"

export const MainContext = createContext();

export function MainContextProvider({ children }) {
    //
    const [seccionList, setSeccionList] = useState(fakeSeccion);
    const [activeSeccion, setActiveSeccion] = useState();
    //
    const [studentList, setStudentList] = useState([]);
    const [selectedStudent, _setSlectedStudent] = useState();
    //
    const [activeShoolYear, setActiveShoolYear] = useState(2022);

    function setSlectedStudent(index) {
        try {
            _setSlectedStudent(studentList[index - 1]);
            //elimina todas las clases "selected"
            for (let i = 1; i < studentList.length + 1; i++) {
                document.getElementById(`index-${i}`).classList.remove("selected");
            }
            //agrega selected a la lista
            document.getElementById(`index-${index}`).classList.add("selected");
        } catch (error) {
         
        }
    }
   
    function getSeccionList(){
        if(seccionList.length === 0){
            return [];
        }
       const subjects = Object.keys(seccionList[0]);
        let seccions = subjects.map(subjec =>{
            return  seccionList[0][subjec].map(sec=>{
                return `${subjec} ${sec}`;
            })
        })
       let list =  seccions.flat();
   
      
       return list;
    }

   async function changeActiveSeccion(seccion){
        if(getSeccionList().includes(seccion)){
            ////Aqui se debe hacer el fecth de las secciones y asignarlas usando setActiveSeccion
            setActiveSeccion(seccion)    
            setStudentList(await getStudent());
        }
    }

    function getSchoolPeriod(){
        return `Período escolar ${activeShoolYear} - ${activeShoolYear + 1}`
    }

    let value = {
        studentList,
        setStudentList,
        selectedStudent,
        setSlectedStudent, 
        getSeccionList,
        setSeccionList,
        activeSeccion,
        changeActiveSeccion,
        setActiveShoolYear,
        getSchoolPeriod
    }


    return <MainContext.Provider value={value}>
        {children}
    </MainContext.Provider>

}