import { createContext, useState } from "react";
import { fakeSeccion } from "./seccionsJSONtest";
import { getStudent } from "../fetch/fetchStudents"

export const MainContext = createContext();

export function MainContextProvider({ children }) {
    //

    //
    const [seccionList, setSeccionList] = useState(fakeSeccion);
    const [activeSeccion, setActiveSeccion] = useState();
    //
    const [studentList, setStudentList] = useState([]);
    const [selectedStudent, _setSlectedStudent] = useState();
    //
    const [activeShoolYear, setActiveShoolYear] = useState(2022);
    //
    const [dataToSave, setDataToSave] = useState({});


    function pushNewData(changes) {
        let name = changes.name;

        let newData = dataToSave;

        if (!newData[name]) {
            newData[name] = changes[name]
        }

        if( changes[name].l1){
            newData[name].l1 = changes[name].l1
        }
        if(changes[name].l2){
            newData[name].l2 = changes[name].l2
        }

        if(changes[name].l3){
            newData[name].l3 = changes[name].l3
        }

        setDataToSave(newData)

       // console.log(dataToSave)
    }


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

    function getSeccionList() {
        if (seccionList.length === 0) {
            return [];
        }
        const subjects = Object.keys(seccionList[0]);
        let seccions = subjects.map(subjec => {
            return seccionList[0][subjec].map(sec => {
                return `${subjec} ${sec}`;
            })
        })
        let list = seccions.flat();


        return list;
    }

    async function changeActiveSeccion(seccion) {
        if (getSeccionList().includes(seccion)) {
            ////Aqui se debe hacer el fecth de las secciones y asignarlas usando setActiveSeccion
            setActiveSeccion(seccion)
            setStudentList(await getStudent());
        }
    }

    function getSchoolPeriod() {
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
        getSchoolPeriod,
        pushNewData,
        dataToSave, 
        setDataToSave
    }


    return <MainContext.Provider value={value}>
        {children}
    </MainContext.Provider>

}