import { createContext, useState } from "react";
import { fakeStudent } from "./studentJSOMtests";
import {fakeSeccion} from "./seccionsJSONtest"

export const MainContext = createContext();

export function MainContextProvider({ children }) {

    const [studentList, setStudentList] = useState(fakeStudent());
    const [selectedStudent, _setSlectedStudent] = useState(studentList[0]);
    const [currentSeccion, setCurrentSeccion] = useState(fakeSeccion[0]);


    function setSlectedStudent(index) {
        _setSlectedStudent(studentList[index - 1]);

        //elimina todas las clases "selected"
        for (let i = 1; i < studentList.length + 1; i++) {
            document.getElementById(`index-${i}`).classList.remove("selected");
        }
        //agrega selected a la lista
        document.getElementById(`index-${index}`).classList.add("selected");

    }



    let value = {
        studentList,
        setStudentList,
        selectedStudent,
        setSlectedStudent
    }


    return <MainContext.Provider value={value}>
        {children}
    </MainContext.Provider>

}