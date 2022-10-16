import { createContext, useState } from "react";
//import { fakeSeccion } from "./seccionsJSONtest";
import { getStudent } from "../fetch/fetchStudents";


export const MainContext = createContext();

export function MainContextProvider({ children }) {
    //
    
    //
    const [activeSeccion, setActiveSeccion] = useState();
    //
    const [studentList, setStudentList] = useState([]);
    const [selectedStudent, _setSlectedStudent] = useState();
    //
    const [activeShoolYear, setActiveShoolYear] = useState(2022);
    //
    const [dataToSave, setDataToSave] = useState({});
    //
    const [message, setMessage] = useState({state: false, type: "success", message:""})

  

    function pushNewData(changes) {
        let name = changes.name;
        //
        let id = changes[name].id - 1;
        let sec = changes[name].session.split(" ")[0];
        let newStudentList = studentList;
        //

        let newData = dataToSave;

        if (!newData[name]) {
            newData[name] = changes[name]
        }



        if (changes[name].l1) {
            newData[name].l1 = changes[name].l1;
            //esto corrige la lista de estudiantes para que las notas se puedan mostrar correctamente
            newStudentList[id].subjects[sec].lap1 = changes[name].l1;
            setStudentList(newStudentList)

        }
        if (changes[name].l2) {
            newData[name].l2 = changes[name].l2
            //esto corrige la lista de estudiantes para que las notas se puedan mostrar correctamente
            newStudentList[id].subjects[sec].lap2 = changes[name].l2;
            setStudentList(newStudentList)
        }

        if (changes[name].l3) {
            newData[name].l3 = changes[name].l3
            //esto corrige la lista de estudiantes para que las notas se puedan mostrar correctamente
            newStudentList[id].subjects[sec].lap3 = changes[name].l3;
            setStudentList(newStudentList)
        }

        if (changes[name].def) {
            newData[name].def = changes[name].def
            //esto corrige la lista de estudiantes para que las notas se puedan mostrar correctamente
            newStudentList[id].subjects[sec].def = changes[name].def;
            setStudentList(newStudentList)
        }

        setDataToSave(newData)
        //
    }

    function SaveData(){
        fetch("/saveGrades", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify(dataToSave)
        })
        .then(data=> data.json())
        .then(response => {
            if(response.error){
                setMessage({state: true, type: "error", message:response.error})
            }
            if(response.message === "OK"){
                setDataToSave({})
                setMessage({state: true, type: "success", message:"Las notas han sido guardadas"})
            }
        })
        .catch(error => console.log(error))
    }


    function setSlectedStudent(index) {
        try {
            _setSlectedStudent(studentList[index - 1]);
            studentList[index - 1].index = `index-${index}`; //agrega el indice

            //elimina todas las clases "selected"
            for (let i = 1; i < studentList.length + 1; i++) {
                document.getElementById(`index-${i}`).classList.remove("selected");
            }
            //agrega selected a la lista
            document.getElementById(`index-${index}`).classList.add("selected");
        } catch (error) {

        }
    }

 
    async function changeActiveSeccion(seccion) {
      
            ////Aqui se debe hacer el fecth de las secciones y asignarlas usando setActiveSeccion
            setActiveSeccion(seccion)
            setStudentList(await getStudent(seccion));
        
    }

    function getSchoolPeriod() {
        return `Período escolar ${activeShoolYear} - ${activeShoolYear + 1}`
    }

    let value = {
        studentList,
        setStudentList,
        selectedStudent,
        setSlectedStudent,
        activeSeccion,
        changeActiveSeccion,
        setActiveShoolYear,
        getSchoolPeriod,
        pushNewData,
        dataToSave,
        setDataToSave,
        SaveData,
        message, 
        setMessage
    }


    return <MainContext.Provider value={value}>
        {children}
    </MainContext.Provider>

}