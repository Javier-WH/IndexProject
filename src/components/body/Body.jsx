import "./body.css";
import { StudentList } from "./list/StudentList";
import { DataName } from "./dataName/DataName";


export function Body() {
   

    return <>
        <div id="body">
     
            <DataName />
            <StudentList />

        </div>
    </>
}