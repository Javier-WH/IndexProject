import { useEffect, useState } from "react"

import StdSelect from "./STDselector"
import StdTable from "./STDtable"

export default function Student(){
    const [name, setName] = useState("Manolo Gutierrez");
    const [ci, setCi] = useState("1547874")
    const [students, setStudents] = useState([
        "Juan",
        'Maria',
        'Jose',
        'Pedro',
    ])
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [stdList, setStdList] = useState([]);

    useEffect(()=>{

        async function getPerfil(){
            let request = await fetch("/tutor/perfil");
            let perfil = await request.json();
            console.log(perfil)
        }
        getPerfil();
    },[])

    return <div id="tutorPanelContainer">
        <div className="tutorDataLabel">{name}</div>
        <div className="tutorDataLabel">{ci}</div>

        <StdSelect options = {students} selectedIndex= {selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <StdTable list ={stdList}/>
    </div>



}