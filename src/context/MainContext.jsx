import { useEffect } from "react";
import { createContext, useState } from "react";
import { fakeStudent } from "./studentJSOMtests";

export const MainContext = createContext();

export function MainContextProvider({ children }) {
    let STDINDEX = 0
    const [studentList, setStudentList] = useState(fakeStudent());
    const [selectedStudent, _setSlectedStudent] = useState(studentList[STDINDEX]);


    function setSlectedStudent(index) {
        let realIdex = index - 1;
        STDINDEX = realIdex;
        _setSlectedStudent(studentList[realIdex]);
        marckSelected(index)
    }

    function marckSelected(index) {
        //elimina todas las clases "selected"
        for (let i = 1; i < studentList.length + 1; i++) {
            document.getElementById(`index-${i}`).classList.remove("selected");
        }
        //agrega selected a la lista
        document.getElementById(`index-${index}`).classList.add("selected");
    }


    useEffect(() => {
        window.addEventListener("keydown", e => {
   
            if (e.key === "ArrowDown") {
                if(STDINDEX < studentList.length -1){
                    STDINDEX++;
                }
            }
            if (e.key === "ArrowUp") {
                if(STDINDEX > 0){
                    STDINDEX--;
                }
            }
            
            setSlectedStudent(++STDINDEX)
        })
    }, [STDINDEX, studentList])



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