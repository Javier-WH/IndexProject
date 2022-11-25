import "./teacher.css"
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import Message from "../../message/Message.jsx"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Selector from "./subjectSelector/selector"

import { useState } from 'react';
import { useEffect } from "react";

export default function Teacher() {

    const [openMessage, setOpenMessage] = useState(false);
    const [messageParams, setMessageParams] = useState({
        type: "success",
        message: "Wololooo"
    })

    const [openPanel, setOpenPanel] = useState(false);

    const [left, setLeft] = useState([]);
    const [right, setRight] = useState([]);

    const [ci, setCi] = useState("");
    const [names, setNames] = useState("");
    const [lastNames, setLastNames] = useState("");
    const [gender, setGender] = useState("m");
    const [birthdate, setBirthdate] = useState("2000-01-01");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [grade, setGrade] = useState("1");
    const [seccion, setSeccion] = useState("A");
    const [matricula, setMatricula] = useState({})
    const [allSeccions, setAllSeccions] = useState([]);
    const [seccionList, setSeccionList] = useState([]);

    useEffect(()=>{
        async function getSeccions(){
            let pull = await fetch("/seccions");
            let seccionList = await pull.json();
            setAllSeccions(seccionList);
        }
        getSeccions();
    },[])

    useEffect(() => {
        try {
            let AS = allSeccions.filter(sec => sec.grade === Number.parseInt(grade));
            setSeccionList(AS[0].seccionsNames);
        } catch (error) {
            
        }
    }, [grade])

    function handleRegister() {
        async function register() {
            let teacherData = {
                ci,
                names,
                lastNames,
                gender,
                birthdate,
                phone,
                email,
                admin: isAdmin,
                subjects: right
            }

            let response = await fetch("/teacher", {
                method: "POST",
                body: JSON.stringify(teacherData),
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json"
                }
            });

            let data = await response.json();
            if (data.error) {
                setMessageParams({
                    type: "error",
                    message: data.error
                })
                setOpenMessage(true);

            } else {
                setMessageParams({
                    type: "success",
                    message: "Se ha inscrito correctamente al profesor"
                })
                setOpenMessage(true);
                cleanData();
                setCi("");
                setOpenPanel(false)
            }
        }
        register();
    }

    useEffect(() => {
        async function getPensum() {
            let ask = await fetch("/matricula");
            let pensum = await ask.json();
            setMatricula(pensum);
        }
        getPensum();
    }, [])

    useEffect(() => {
        /*eslint-disable*/
        fillMatricula();

    }, [seccion, grade, matricula])

    function fillMatricula() {
        try {
            setLeft([]);
            let subjects = []

            matricula.map(register => {
                if (register.schoolYear === Number.parseInt(grade)) {
                    register.subjects.map(subjec => {
                        subjects.push(`${subjec} (${grade}-${seccion})`) //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
                    })
                }
            })
            setLeft(subjects);


        } catch (error) {

        }
    }

    function handleSearch() {

        async function getTeacher() {

            if (ci === "") {
                setMessageParams({
                    type: "error",
                    message: "El campo cédula está vacio"
                })
                setOpenMessage(true);
                cleanData();
                setOpenPanel(false)
                return
            }

            setOpenPanel(true)
            let request = await fetch(`/teacher?ci=${ci}`);
            let teacher = await request.json();

            if (teacher.error) {
                setMessageParams({
                    type: "error",
                    message: teacher.error
                })
                setOpenMessage(true);
                cleanData();
          
                return
            }

            setCi(teacher.ci);
            setNames(teacher.names);
            setLastNames(teacher.lastNames);
            setGender(teacher.gender);
            setBirthdate(teacher.birthdate.split("T")[0]);
            setPhone(teacher.phone);
            setEmail(teacher.email);
            setIsAdmin(teacher.admin);
            setRight(teacher.subject);
            console.log(teacher.subject)

        }

        getTeacher();
    }

    function cleanData() {
        setNames("");
        setLastNames("");
        setGender("m");
        setBirthdate("2000-01-01");
        setPhone("");
        setEmail("");
        setIsAdmin(false);
        setRight([]);
        setLeft([])
        fillMatricula();
    }

    let key = 1;
    return <div id="teacherContainer">
        <Message open={openMessage} setOpen={setOpenMessage} data={messageParams} />
        <div id="teacherCiContainer">
            <TextField id="outlined-basic" label="Cédula" type="number" autoComplete='off' variant="outlined" value={ci} onChange={e =>{
                setCi(e.target.value)
                setOpenPanel(false);
                cleanData();
                }} />
            <Button variant="outlined" id="btnSearchTeacher" onClick={handleSearch}> <SchoolTwoToneIcon /> Buscar</Button>
        </div>

        <div id="teacherDataContainer" className={openPanel ? "" : "invisible"}>
            <TextField id="outlined-basic" label="Nombres" autoComplete='off' variant="outlined" value={names} onChange={e => setNames(e.target.value)} />
            <TextField id="outlined-basic" label="Apellidos" autoComplete='off' variant="outlined" value={lastNames} onChange={e => setLastNames(e.target.value)} />

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Genero</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={gender}
                    onChange={e => setGender(e.target.value)}
                    name="instructionLevel"
                >
                    <FormControlLabel value="m" control={<Radio />} label="Masculino" />
                    <FormControlLabel value="f" control={<Radio />} label="Femenino" />
                </RadioGroup>
            </FormControl>

            <TextField id="outlined-basic" label="Cumpleaños" autoComplete='off' type="date" variant="outlined" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
            <TextField id="outlined-basic" label="Télefono" autoComplete='off' variant="outlined" value={phone} onChange={e => setPhone(e.target.value)} />
            <TextField id="outlined-basic" label="Email" autoComplete='off' variant="outlined" value={email} onChange={e => setEmail(e.target.value)} />
            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked checked={isAdmin} onChange={e => setIsAdmin(e.target.checked)} />} label="Permisos de Administrador" />
            </FormGroup>

            <div className="info">Materias asignadas al profesor</div>

            <div id="subjecsContainer">
                <FormControl >
                    <InputLabel id="demo-simple-select-label">Grado</InputLabel>
                    <Select
                        labelId="demo-simple-select-Grado"
                        id="demo-simple-Grado"
                        value={grade}
                        label="Grado"
                        onChange={e => setGrade(e.target.value)}
                    >
                         <MenuItem value="0" disabled selected>Selecciona uno</MenuItem>
                        <MenuItem value="1">Primer año</MenuItem>
                        <MenuItem value="2">Segundo año</MenuItem>
                        <MenuItem value="3">Tercer año</MenuItem>
                        <MenuItem value="4">Cuarto año</MenuItem>
                        <MenuItem value="5">Quinto año</MenuItem>
                    </Select>
                </FormControl>


                <FormControl >
                    <InputLabel id="demo-simple-select-label">Sección</InputLabel>
                    <Select
                        labelId="demo-simple-select-labelseccion"
                        id="demo-simple-selectseccion"
                        value={seccion}
                        label="seccion"
                        onChange={e => setSeccion(e.target.value)}
                    >

                        {
                            seccionList.map(sec=>{
                                return <MenuItem value={sec} key={key++}>{sec}</MenuItem>

                            })

                        }
       
                    </Select>
                </FormControl>

            </div>


            <Selector grade={grade} seccion={seccion} left={left} setLeft={setLeft} right={right} setRight={setRight} />

            <Button variant="outlined" id="btnSearchTeacher" onClick={handleRegister}> <HowToRegIcon /> Registrar</Button>


        </div>

    </div>
}