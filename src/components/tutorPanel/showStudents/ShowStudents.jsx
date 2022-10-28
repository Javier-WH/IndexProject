import { useEffect, useState } from "react"
import StdSelect from "./STDselector"
import StdTable from "./STDtable"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
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


    function handleLogOut() {
        fetch("/logout");
        window.location.reload(true);
    }


    function handleLoadPhoto(e) {

        let file = e.target.files[0];
        if (file.type !== "image/jpeg") {
            console.log("la imagen no es jpg");
            return
        }

        document.getElementById("tutorPanelStudentPhoto").src = URL.createObjectURL(file);

        async function pushPhoto() {
            let data = new FormData();
            data.append("file", file);
            data.append("studentId", stdId);
            data.append("fileName", file.name);

            let push = await fetch("/photo", {
                method: "POST",
                body: data
            });
            let response = await push.json();

        }
        pushPhoto();

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
            setStdScoolYear(translateSchoolYear(Number.parseInt(selectedStudent.schoolYear)))

            async function getPhoto() {
                let response = await fetch(`/photo?id=${stdId}`);
                let status = await response.status;

                if (status === 200) {
                    let blob = await response.blob();
                    setStdPhoto(URL.createObjectURL(blob));
                } else {
                    setStdPhoto(selectedStudent.gender === "m" ? MalePlaceHolder : FemalePlaceHolder);
                }
            }
            getPhoto();
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
        <div id="tutorBarContainer">
            <div id="tutorNameTutorPanel">
                <div className="tutorDataLabel tutorPanelTutorName">{name}</div>
                <div className="tutorDataLabel tutorPanelTutorCi">{`Cédula: ${ci}`}</div>
            </div>
            <div id="tutorBarExit" onClick={handleLogOut}><ExitToAppIcon/></div>
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