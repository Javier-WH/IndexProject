import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

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


            <TextField id="outlined-basic" label="Cumpleaños" variant="outlined" type="date" />
            <TextField id="outlined-basic" label="Télefono" variant="outlined" type="number" />
            <TextField id="outlined-basic" label="Email" variant="outlined" type="email" />

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Género</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="f" control={<Radio />} label="Femenino" />
                    <FormControlLabel value="m" control={<Radio />} label="Masculino" />
                </RadioGroup>
            </FormControl>

            <div id="requisites">
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />

            </div>


        </div>

    </div>
}