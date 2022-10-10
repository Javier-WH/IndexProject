import "./body.css";
import { StudentList } from "./list/StudentList";
import { DataName } from "./dataName/DataName";
import {MainContextProvider} from "../../context/MainContext"

export function Body() {
   

    return <>
        <div id="body">
        <MainContextProvider>
            <DataName />
            <StudentList />
        </MainContextProvider>
        </div>
    </>
}