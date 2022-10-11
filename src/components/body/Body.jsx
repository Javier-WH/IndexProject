import "./body.css";
import { StudentList } from "./list/StudentList";
import { DataName } from "./dataName/DataName";
import {MobileList} from "./list/mobileList"
import { useState } from "react";
import { useEffect } from "react";


export function Body() {

    const [width, setwidth] = useState(window.outerWidth);

    useEffect(()=>{
        function reziseHandler(){
            setwidth(window.outerWidth)
        }
        window.addEventListener("resize", reziseHandler);

        return ()=>{
            window.removeEventListener("resize", reziseHandler);
        }

    },[])


    if (width >= 900) {
        return <>
            <div id="body">

                <DataName />
                <StudentList />

            </div>
        </>
    }else{
        return <>
        <div id="mobil">
            <MobileList/>
            <DataName />
        </div>
    </>
    }

}