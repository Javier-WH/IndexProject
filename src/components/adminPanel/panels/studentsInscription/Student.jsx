import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { useState } from 'react';

import "./student.css"

export default function Inscription() {



    return <div id="InscriptionContainer">
        <div id="divCi">
            <TextField id="outlined-basic" label="Cédula" variant="outlined" type="number" />
            <Button variant="outlined">Buscar</Button>
        </div>
        <div id="studentDataContainer">
            <TextField id="outlined-basic" label="Nombres" variant="outlined" />
            <TextField id="outlined-basic" label="Apellidos" variant="outlined" />
            <div id="auxContainer">
                <TextField id="outlined-basic" label="Cumpleaños" variant="outlined" type="date" />
            </div>
        </div>

    </div>
}