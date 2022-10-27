import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Message from "../adminPanel/message/Message"
import { useState } from 'react';

import Logo from "../../logo.svg"

import "./teacherPerfil.css";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "100%",
    height: "100%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function KeepMountedModal({ open, setOpen }) {

    const [names, setNames] = useState("");
    const [lastNames, setLastNames] = useState("");
    const [ci, setCi] = useState("");
    const [gender, setGender] = useState("f");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [birthdate, setBirthdate] = useState("2000-01-01");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [subjects, setSubjects] = useState([])

    const [openMessage, setOpenMessage,] = useState(false);
    const [MessageData, setMessageData] = useState({ type: "warning", message: "hola" })


    function checkMissing() {
        if (names === "") {
            return "Nombres"
        }
        if (lastNames === "") {
            return "Apellidos"
        }
        if (ci === "") {
            return "Cédula"
        }
        if (phone === "") {
            return "Teléfono"
        }
        if (email === "") {
            return "Email"
        }
        if (user === "") {
            return "Usuario"
        }
        if (password === "") {
            return "Contraseña"
        }
        if (password2 === "") {
            return "Repite contraseña"
        }
        return "none"
    }

    const handleClose = () => {
        setOpen(false);

    }

    function handleSend() {
        let missing = checkMissing();

        if (missing !== "none") {
            setMessageData({ type: "error", message: `No ha suministrado el campo: ${missing}` });
            setOpenMessage(true)
            return;
        }

        if (password !== password2) {
            setMessageData({ type: "error", message: `Las contraseñas son diferentes` });
            setOpenMessage(true)
            return;
        }


        let teacherData = {
            ci,
            names,
            lastNames,
            gender,
            birthdate,
            phone,
            email,
            user,
            password,
            subjects
        }

        async function sendData() {
            try {

                let response = await fetch("/teacher", {
                    method: "POST",
                    body: JSON.stringify(teacherData),
                    headers: {
                        "Accept": "*/*",
                        "Content-Type": "application/json"
                    }
                });

                await response.json();
                handleClose();

            } catch (error) {

            }
        }
        sendData();
    }

    React.useEffect(() => {

        try {
            let teacher = open.teacher;
            setNames(teacher.names);
            setLastNames(teacher.lastNames);
            setCi(teacher.ci);
            setGender(teacher.gender);
            setPhone(teacher.phone);
            setEmail(teacher.email);
            setBirthdate(teacher.birthdate.split("T")[0]);
            setSubjects(teacher.subject);

        } catch (error) {

        }


    }, [open])

    let key = 0;
    return (
        <div>
            <Message open={openMessage} setOpen={setOpenMessage} data={MessageData} />
            <Modal
                keepMounted
                open={open.state}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <div id="teacherDataContainerX">
                        <div id="PTBG">
                            <div id="titleperfilcontainer">
                                <img id='perfilTeacherLogo' src={Logo} alt="" />
                                <div id="perfilTeacherTitle"> Perfil del profesor </div>
                            </div>
                            <TextField id="outlined-basic" label="Nombres" variant="outlined" value={names} onChange={e => setNames(e.target.value)} autoComplete='off' />
                            <TextField id="outlined-basic" label="Apellidos" variant="outlined" value={lastNames} onChange={e => setLastNames(e.target.value)} autoComplete='off' />
                            <TextField id="outlined-basic" label="Cédula" variant="outlined" type="number" value={ci} autoComplete='off' />
                            <div id="auxDataContainer">
                                <FormControl className="perfilTeacherInput2">
                                    <FormLabel id="demo-radio-buttons-group-labelteacherGender">Genero</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label_gender"
                                        value={gender}
                                        onChange={e => setGender(e.target.value)}
                                        name="teacherGender"
                                    >
                                        <FormControlLabel value="m" control={<Radio />} label="Masculino" />
                                        <FormControlLabel value="f" control={<Radio />} label="Femenino" />
                                    </RadioGroup>
                                </FormControl>

                                <TextField id="outlined-basic" label="Teléfono" variant="outlined" type="number" value={phone} onChange={e => setPhone(e.target.value)} autoComplete='off' />
                                <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={e => setEmail(e.target.value)} autoComplete='off' />
                                <TextField id="outlined-basic" label="Cumpleaños" variant="outlined" type="date" autoComplete='off' value={birthdate} onChange={e => setBirthdate(e.target.value)} />
                            </div>

                            <TextField id="outlined-basic" label="Usuario" variant="outlined" value={user} onChange={e => setUser(e.target.value)} autoComplete='off' />
                            <TextField id="outlined-basic" type="password" label="Contraseña" variant="outlined" value={password} onChange={e => setPassword(e.target.value)} autoComplete='off' />
                            <TextField id="outlined-basic" type="password" label="Repite la contraseña" variant="outlined" value={password2} onChange={e => setPassword2(e.target.value)} autoComplete='off' />

                            <div id="teacherFoundedSubjects">

                                {
                                    subjects.map(subject => {
                                        return <div className="perfilTeacherSubject" key={key++}>{subject}</div>
                                    })
                                }

                            </div>

                            <div id="perfilBTNContainer">
                                <Button variant="contained" color="success" onClick={handleSend}>Aceptar</Button>
                                <Button variant="outlined" color="error" onClick={handleClose}>Cancelar</Button>
                            </div>
                        </div>
                    </div>

                </Box>
            </Modal>
        </div>
    );
}


/**
 * {
     state: true,
     teacher:{}
    }
 */