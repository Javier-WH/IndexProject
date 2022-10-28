import { useEffect, useState } from "react"
import StdSelect from "./STDselector"
import StdTable from "./STDtable"

import MalePlaceHolder from "../../../placeHolders/malePlaceholder.jpg"
import FemalePlaceHolder from "../../../placeHolders/femalePlaceHolder.jpg"

let request = null;
let perfil = null;

export default function Student() {
    const [name, setName] = useState("Manolo Gutierrez");
    const [ci, setCi] = useState("1547874")
    const [students, setStudents] = useState([
        "Juan",
        'Maria',
        'Jose',
        'Pedro',
    ])
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [grades, setGrades] = useState([]);
    const [stdId, setStdId] = useState("");
    const [stdName, setStdName] = useState("");
    const [stdCi, setStdCi] = useState("");
    const [stdSeccion, setStdSeccion] = useState("");
    const [stdGender, setStdGender] = useState("");
    const [stdPeriod, setStdPeriod] = useState("");
    const [stdSchoolYear, setStdScoolYear] = useState("");
    const [stdPhoto, setStdPhoto] = useState(MalePlaceHolder);

 

    async function sendData(data){

        let push = await fetch("/photo", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                id: stdId,
                photo : data
            })
        });
        let response = await push.json();
        console.log(response)
    }

    function handleLoadPhoto(e) {
        //console.log(e.target.files[0])
        let file = e.target.files[0];
        if (file.type !== "image/jpeg") {
            console.log("la imagen no es jpg");
            return
        }

        let reader = new FileReader();
        reader.onload = async function () {
            let B64 = reader.result;
            document.getElementById("tutorPanelStudentPhoto").src = B64;
        
            //await sendData(B64)   bug

        };
        reader.readAsDataURL(file);
    }



    useEffect(() => {

        try {
            let selectedStudent = perfil.students[selectedIndex - 1];
            setGrades(selectedStudent.subjects);
            setStdId(selectedStudent.id);
            setStdName(`${selectedStudent.names} ${selectedStudent.lastNames}`);
            setStdCi(selectedStudent.ci);
            setStdSeccion(selectedStudent.seccion);
            setStdGender(selectedStudent.gender === "m" ? "Masculino" : "Femenino");
            setStdPeriod(`${selectedStudent.period} - ${Number.parseInt(selectedStudent.period) + 1}`);
            setStdScoolYear(translateSchoolYear(Number.parseInt(selectedStudent.schoolYear)));
            setStdPhoto(selectedStudent.gender === "m" ? MalePlaceHolder : FemalePlaceHolder);
            
        } catch (error) {

        }


    }, [selectedIndex])

    useEffect(() => {
        async function getPerfil() {
            request = await fetch("/tutor/perfil");
            perfil = await request.json();
            setName(`${perfil.tutorName} ${perfil.tutorLastName}`);
            setCi(perfil.tutorCi)

            let stdNames = perfil.students.map(student => {
                return `${student.names} ${student.lastNames}`;
            })
            stdNames.unshift("Click aqui para seleccionar un estudiante")
            setStudents(stdNames);

        }
        getPerfil();
    }, [])


    return <div id="tutorPanelContainer">
        <div id="tutorNameTutorPanel">
            <div className="tutorDataLabel tutorPanelTutorName">{name}</div>
            <div className="tutorDataLabel tutorPanelTutorCi">{`Cédula: ${ci}`}</div>
        </div>

        <StdSelect options={students} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />

        <div className={selectedIndex === 0 ? "invisible" : ""}>
            <input type="file" name="" id="stdPhoto" className="invisible" onChange={handleLoadPhoto} />
            <div id="tutorPanelStudentData">
                <label id="tutorPanelPhotoContainer" htmlFor="stdPhoto">
                    <img src={stdPhoto} alt="" id="tutorPanelStudentPhoto" />
                </label>
                <div id="tutorPanelStudentDataAux">
                    <div className="stdTutorPanelStdData">{`Nombres: ${stdName}`}</div>
                    <div className="stdTutorPanelStdData">{`Cédula: ${stdCi}`}</div>
                    <div className="stdTutorPanelStdData">{`Sección: ${stdSeccion}`}</div>
                    <div className="stdTutorPanelStdData">{`Genero: ${stdGender}`}</div>
                    <div className="stdTutorPanelStdData">{`Grado: ${stdSchoolYear}`}</div>
                    <div className="stdTutorPanelStdData">{`Periodo Escolar: ${stdPeriod}`}</div>
                </div>

            </div>
            <StdTable grades={grades} />
        </div>
    </div>



}


function translateSchoolYear(num) {
    switch (num) {
        case 1:
            return "Primer año"
        case 2:
            return "Segundo año"
        case 3:
            return "Tercer año"
        case 4:
            return "Cuarto año"
        case 5:
            return "Quinto año"
        default:
            return "Indeterminado"
    }
}