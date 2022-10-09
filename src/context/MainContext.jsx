import { createContext, useState } from "react";
import { fakeStudent } from "./studentJSOMtests";

export const MainContext = createContext();

export function MainContextProvider({children}){
    const [studentList, setStudentList] = useState(fakeStudent());
    let value ={
        studentList,
        setStudentList
    }
    return <MainContext.Provider value={value}>
        {children}
    </MainContext.Provider>

}