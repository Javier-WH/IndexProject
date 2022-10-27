import { useState } from "react"
import Tabs from "./tabs/Tabs"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import validateUser from "../../fetch.js";
import "./dataContainer.css"
import Modal from "../../../inputModal/inputModal"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Message from "../../../adminPanel/message/Message"
import Perfil from "../../../perfilTeacher/TeacherPerfil"


const MySwal = withReactContent(Swal)


export function DataContainer({ log }) {

    const [value, setValue] = useState(0);
    const [user, setUser] = useState();
    const [pass, setPass] = useState();

    const [modal, setModal] = useState({ state: false })

    //message
    const [openMessage, setOpenMessage] = useState(false);
    const [messageData, setMessageData] = useState({message: "aelimon"})
    //perfil
    const [openPerfil, setOpenPerfil] = useState({state: false, teacher:{}})


    function getLabel() {
        if (value === 1) {
            return "Cédula"
        }
        return "Nombre de usuario"
    }

    function handleUser(e) {
        setUser(e.target.value);
    }

    function handlePass(e) {
        setPass(e.target.value);
    }

    function handleSend() {
        let action = async () => {
            let data = {
                user,
                pass,
                type: value
            }
            let response = await validateUser(data);
            if (response.error) {
                MySwal.fire({
                    icon: 'error',
                    title: 'Ha ocurrido un error',
                    text: response.error
                })
            } else {
                log(response.code)
            }
        }
        action();
    }

    function handleRegister() {
        setModal({
            state: true,
            title: "Registro de profesor",
            label: "Cédula",
            action: e=>{
                if(e === ""){
                    setMessageData({
                        message: "Debe suministrar una cédula",
                        type:"warning"
                    })
                    setOpenMessage(true);
                    return
                }

                fetch(`/teacher?ci=${e}`).then(response=> response.json())
                .then(teacher=>{

                    if(teacher.error){
                        setMessageData({
                            message: teacher.error,
                            type:"error"
                        })
                        setOpenMessage(true);
                        return
                    }
                    
                    if(teacher.password === null){

                        setOpenPerfil({
                            state: true,
                            teacher
                        })

                    }else{
                        setMessageData({
                            message: "El profesor ya está registrado",
                            type:"error"
                        })
                        setOpenMessage(true);
                    }
                    

                }).catch(error=>{
                    setMessageData({
                        message: "Ha ocurrido un error inesperado",
                        type:"error"
                    })
                    setOpenMessage(true);
                })

            }
        })
    }


    return <>
        <Modal open={modal} setOpen={setModal} />
        <Message open={openMessage} setOpen={setOpenMessage} data={messageData} />
        <Perfil open={openPerfil} setOpen={setOpenPerfil}/>
        <div id="dataContainer">

            <Tabs value={value} setValue={setValue} />

            <div id="inputContainer">
                <TextField id="outlined-basic" label={getLabel()} variant="outlined" className="input" onChange={handleUser} autoComplete='off' />
                <TextField id="outlined-basic" label="Contraseña" variant="outlined" type="password" className="input" onChange={handlePass} autoComplete='off' />
                <Button variant="contained" onClick={handleSend}>Ingresar</Button>
            </div>
            <div id="footer">Index software alfa versión 0.1 - 2022</div>
            <div id="links" className={value === 2 ? "invisible" : ""}>
                <div className="links">Recuperar contraseña</div>
                <div className={`"links" ${value === 0 ? "" : "invisible"}`} onClick={handleRegister}>Registro</div>
            </div>
        </div>
    </>
}