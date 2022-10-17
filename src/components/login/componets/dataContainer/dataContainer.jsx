import { useState } from "react"
import Tabs from "./tabs/Tabs"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import validateUser from "../../fetch.js";
import "./dataContainer.css"

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


export function DataContainer({log}) {

    const [value, setValue] = useState(0);
    const [user, setUser] = useState();
    const [pass, setPass] = useState();

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
            if(response.error){
                MySwal.fire({
                    icon: 'error',
                    title: 'Ha ocurrido un error',
                    text: response.error
                })
            }else{
                log(response.code)
            }
        }
        action();
    }



    return <>
        <div id="dataContainer">

            <Tabs value={value} setValue={setValue} />

            <div id="inputContainer">
                <TextField id="outlined-basic" label={getLabel()} variant="outlined" className="input" onChange={handleUser}  autoComplete='off'/>
                <TextField id="outlined-basic" label="Contraseña" variant="outlined" type="password" className="input" onChange={handlePass}  autoComplete='off'/>
                <Button variant="contained" onClick={handleSend}>Ingresar</Button>
            </div>

            <div id="footer">Index software alfa versión 0.1 - 2022</div>
        </div>
    </>
}