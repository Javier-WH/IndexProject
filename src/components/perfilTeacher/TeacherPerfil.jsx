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
import { useState } from 'react';

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
    const [gender, setGender] = useState("m");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");



    const handleClose = () => {
        setOpen(false);

    }


    return (
        <div>
            <Modal
                keepMounted
                open={open.state}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <div id="teacherDataContainer">
                        <div id="perfilTeacherTitle"> Perfil del profesor </div>
                        <TextField id="outlined-basic" label="Nombres" variant="outlined" className="input" value={names} onChange={e => setNames(e.target.value)} autoComplete='off' />
                        <TextField id="outlined-basic" label="Apellidos" variant="outlined" className="input" value={lastNames} onChange={e => setLastNames(e.target.value)} autoComplete='off' />
                        <TextField id="outlined-basic" label="Cédula" variant="outlined" type="number" className="input" value={ci} autoComplete='off' />
                        <div id="auxDataContainer">
                            <FormControl className="perfilTeacherInput2">
                                <FormLabel id="demo-radio-buttons-group-label">Genero</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    value={gender}
                                    onChange={e => setGender(e.target.value)}
                                    name="nationality"
                                >
                                    <FormControlLabel value="m" control={<Radio />} label="Masculino" />
                                    <FormControlLabel value="f" control={<Radio />} label="Femenino" />
                                </RadioGroup>
                            </FormControl>

                            <TextField id="outlined-basic" label="Teléfono" variant="outlined" type="number" className="perfilTeacherInput2" value={phone} onChange={e => setPhone(e.target.value)} autoComplete='off' />
                            <TextField id="outlined-basic" label="Email" variant="outlined" type="number" className="perfilTeacherInput2" value={email} onChange={e => setEmail(e.target.value)} autoComplete='off' />

                        </div>

                        <TextField id="outlined-basic" label="Usuario" variant="outlined" className="input" value={user} onChange={e => setUser(e.target.value)} autoComplete='off' />
                        <TextField id="outlined-basic" label="Contraseña" variant="outlined" className="input" value={password} onChange={e => setPassword(e.target.value)} autoComplete='off' />
                        <TextField id="outlined-basic" label="Repite la contraseña" variant="outlined" className="input" value={password2} onChange={e => setPassword2(e.target.value)} autoComplete='off' />
                        <div id="teacherFoundedSubjects">


                        </div>
                        <div id="perfilBTNContainer">
                            <Button variant="contained" color="success">Aceptar</Button>
                            <Button variant="outlined" color="error" onClick={handleClose}>Cancelar</Button>
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