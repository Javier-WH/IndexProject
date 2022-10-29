import "./dataName.css";
import TextField from '@mui/material/TextField';
import { useContext, useState } from "react";
import { MainContext } from "../../../context/MainContext"
import { useEffect } from "react";

import { OpenModal } from "../../modal/Modal"

import MalePhoto from "../../../placeHolders/malePlaceholder.jpg"
import FemalePhoto from "../../../placeHolders/femalePlaceHolder.jpg"


export function DataName() {

    const { selectedStudent, activeSeccion, getSchoolPeriod, pushNewData, studentList } = useContext(MainContext)

    const [gradeCap, setGradeCap] = useState(20)
    const [photo, setPhoto] = useState("");
    const [studentName, setStudentName] = useState("");
    const [studentCI, setStudentCI] = useState("");
    const [lap1, setLap1] = useState("");
    const [lap2, setLap2] = useState("");
    const [lap3, setLap3] = useState("");
    const [def, setDef] = useState("");
    const [modal, setModal] = useState({ state: false });
    const [disabled, setDisabled] = useState({
        lap1: false,
        lap2: false,
        lap3: false,
        edit: false,
    })

    function handleNameChange(event) {
        setStudentName(event.target.value);
    };
    function handlePassChange(event) {
        setStudentCI(event.target.value);
    };

    function handleDef() {
        let lap1Input = document.getElementById("lap1").value;
        let lap2Input = document.getElementById("lap2").value;
        let lap3Input = document.getElementById("lap3").value;

        let final = ((Number.parseFloat(lap1Input) + Number.parseFloat(lap2Input) + Number.parseFloat(lap3Input)) / 3).toFixed(2)


        if (isNaN(final)) {
            final = ""

        }


        setDef(final)
        return final;
    }



    function handleLap1Change(event) {

        event.target.classList.remove("error")
        let value = event.target.value;
        if (value <= gradeCap && value >= 0) {
            setLap1(value);

            let decimals = value.split(".")[1];
            if (decimals !== undefined) {
                value = Number.parseFloat(value).toFixed(2);
            }

            let def = handleDef();
            let objectName = `id-${selectedStudent.id}`;
            let dataToSave = {
                name: objectName,
                [objectName]: {
                    id: selectedStudent.id,
                    session: activeSeccion,
                    l1: value,
                    def
                }
            }

            pushNewData(dataToSave);

        }
    };

    function handleLap2Change(event) {
        event.target.classList.remove("error")
        let value = event.target.value;
        if (value <= gradeCap && value >= 0) {
            setLap2(value);

            let decimals = value.split(".")[1];
            if (decimals !== undefined) {
                value = Number.parseFloat(value).toFixed(2);
            }


            let objectName = `id-${selectedStudent.id}`;
            let dataToSave = {
                name: objectName,
                [objectName]: {
                    id: selectedStudent.id,
                    session: activeSeccion,
                    l2: value,
                    def: handleDef()
                }
            }
            pushNewData(dataToSave);
        }
    };

    function handleLap3Change(event) {
        event.target.classList.remove("error")
        let value = event.target.value;
        if (value <= gradeCap && value >= 0) {
            setLap3(value);

            let decimals = value.split(".")[1];
            if (decimals !== undefined) {
                value = Number.parseFloat(value).toFixed(2);
            }


            let objectName = `id-${selectedStudent.id}`;
            let dataToSave = {
                name: objectName,
                [objectName]: {
                    id: selectedStudent.id,
                    session: activeSeccion,
                    l3: value,
                    def: handleDef()
                }
            }
            pushNewData(dataToSave);
        }
    };

    function handleInputKeyUpDown(event) {

        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
        }
    }



    function lapLostFocus(event) {
        let value = event.target.value;


        if (value === "") {
            event.target.classList.add("error")
            setModal({
                state: true,
                button: "1",
                type: "warning",
                title: "UPS",
                message: "La nota que ha ingresado no es valida"
            })

            if (event.target.id === "lap1") {
                setLap1("");
            }
            if (event.target.id === "lap2") {
                setLap2("");
            }
            if (event.target.id === "lap3") {
                setLap3("");
            }
        }

        if (value < 10 && value.length < 2 && value !== "") {
            if (event.target.id === "lap1") {
                setLap1("0" + value);
            }
            if (event.target.id === "lap2") {
                setLap2("0" + value);
            }
            if (event.target.id === "lap3") {
                setLap3("0" + value);
            }
        }

        let decimals = value.split(".")[1];
        if (decimals !== undefined) {
            if (decimals.length > 2) {
                if (event.target.id === "lap1") {
                    setLap1(Number.parseFloat(value).toFixed(2));
                }
                if (event.target.id === "lap2") {
                    setLap2(Number.parseFloat(value).toFixed(2));
                }
                if (event.target.id === "lap3") {
                    setLap3(Number.parseFloat(value).toFixed(2));
                }
            }
        }


    }

    useEffect(() => {
        try {
            //corrige el bug del espacio en las secciones
            let subjet = activeSeccion.substring(0, activeSeccion.length - 4)
            let grades = selectedStudent.subjects[subjet];
            setLap1(grades.lap1);
            setLap2(grades.lap2);
            setLap3(grades.lap3);
            setDef(grades.def);
        } catch (error) {
            setLap1(0);
            setLap2(0);
            setLap3(0);
            setDef(0);
        }
        try {
            setStudentName(`${selectedStudent.names} ${selectedStudent.lastNames}`)
            setStudentCI(selectedStudent.ci);


            async function getPhoto() {
                let response = await fetch(`/photo?id=${selectedStudent.id}`);
                let status = await response.status;

                if (status === 200) {
                    let blob = await response.blob();
                    setPhoto(URL.createObjectURL(blob));
                } else {
                    setPhoto(selectedStudent.gender === "m" ? MalePhoto : FemalePhoto);
                }
            }
            getPhoto();


        } catch (error) {
            setStudentName("")
            setStudentCI("")
        }

    }, [selectedStudent, activeSeccion])


    ///esto actualiza la lista de alumnos con las notas itroduicidas
    useEffect(() => {
        if (selectedStudent === undefined) {
            return;
        }
        let lap1Input = document.getElementById("lap1");
        let lap2Input = document.getElementById("lap2");
        let lap3Input = document.getElementById("lap3");
        let defInput = document.getElementById("studentDef");

        try {
            let index = selectedStudent.index;
            document.getElementById(`${index}-l1`).innerText = lap1Input.value;
            document.getElementById(`${index}-l2`).innerText = lap2Input.value;
            document.getElementById(`${index}-l3`).innerText = lap3Input.value;
            document.getElementById(`${index}-def`).innerText = defInput.innerText;
        } catch (error) {

        }
    }, [lap1, lap2, lap3, selectedStudent])

    useEffect(() => {

        async function getConfig() {
            try {
                let pull = await fetch("/config");
                let config = await pull.json();
                //console.log(config);
                setDisabled({
                    lap1: !config.lap1,
                    lap2: !config.lap2,
                    lap3: !config.lap3,
                    edit: !config.edit,
                })
                setGradeCap(config.maxGradeCap)
                
            } catch (error) {
                
                setModal({
                    state: true,
                    button: "1",
                    type: "error",
                    title: "Advertencia",
                    message: "Se ha perdido la conexión con el servidor"
                })

            }

        }
        getConfig();


        let interval = setInterval(() => {
            getConfig();
        }, 5000);

    }, [])


    if ((activeSeccion === undefined)) {
        return <div id="dataName"> Debe seleccionar una sección para iniciar</div>
    } else if (studentList.length <= 0) {
        return <div id="dataName">{`No se han encontado estudiantes inscritos en la seccion ${activeSeccion}`}</div>
    } else {
        return <>
            <OpenModal modal={modal} setModal={setModal} />
            <div id="dataName">
                <div id="dataTitleContainer">
                    <div id="dataTitle">{activeSeccion}</div>
                    <div id="dataTitleSchoolYear">{getSchoolPeriod()}</div>
                </div>
                <div id="studentDataContainerx">
                    <div id="studentPhoto"> <img src={photo} alt="" id="stdPhoto" /> </div>
                    <div id="auxStudenName">
                        <TextField id="studentName" className="studentInput" label="Nombre del Alumno" variant="outlined" value={studentName} onChange={handleNameChange} spellCheck="false" />
                        <TextField id="studentCi" className="studentInput" label="Cédula del Alumno" variant="outlined" value={studentCI} onChange={handlePassChange} spellCheck="false" />
                    </div>
                </div>
                <div id="studenGradesContainer">
                    <div className="studenLapse">
                        <div className="lblLapse">Primer Lapso</div>
                        <input type="number" id="lap1" className="lapInput" disabled={disabled.lap1} value={lap1} onChange={handleLap1Change} onBlur={lapLostFocus} onKeyDown={handleInputKeyUpDown} spellCheck="false" />
                    </div>
                    <div className="studenLapse">
                        <div className="lblLapse">Segundo Lapso</div>
                        <input type="number" id="lap2" className="lapInput" disabled={disabled.lap2} value={lap2} onChange={handleLap2Change} onBlur={lapLostFocus} onKeyDown={handleInputKeyUpDown} spellCheck="false" />
                    </div>
                    <div className="studenLapse">
                        <div className="lblLapse">Tercer Lapso</div>
                        <input type="number" id="lap3" className="lapInput" disabled={disabled.lap3} value={lap3} onChange={handleLap3Change} onBlur={lapLostFocus} onKeyDown={handleInputKeyUpDown} spellCheck="false" />
                    </div>
                </div>
                <div id="studentDefContainer">
                    <div>Acumulado / Definitiva</div>
                    <div id="studentDef">{def}</div>
                </div>
            </div>
        </>
    }
}

