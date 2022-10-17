import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { useState } from 'react';

import "./config.css"


export default function Config() {

    const [l1, setL1] = useState(true);
    const [l2, setL2] = useState(true);
    const [l3, setL3] = useState(true);
    const [edit, setEdit] = useState(false); 
    const [period, setPeriod] = useState(2022);
    const [studentCap, setStudentCap] = useState(30);
    const [maxGrade, setMaxGrade] = useState(20);



    function onL1Change(e) {
        setL1(e.target.checked);
    }
    function onL2Change(e) {
        setL2(e.target.checked);
    }
    function onL3Change(e) {
        setL3(e.target.checked);
    }
    function handleEdit(e){
        setEdit(e.target.checked)
    }
    function handlePeriod(e){
        let value = e.target.value;
        setPeriod(value); 
    }
    function handleStudentCap(e){
        setStudentCap(e.target.value);
    }
    function handleGrande(e){
        setMaxGrade(e.target.value)
    }

    return <div id="configContainer">

        <div className="optConfigContainer">
            <FormControlLabel control={<Switch checked={l1} onChange={onL1Change} />} label="Habilitar el ingreso de notas del primer lapso" />
        </div>
        <div className="optConfigContainer">
            <FormControlLabel control={<Switch checked={l2} onChange={onL2Change} />} label="Habilitar el ingreso de notas del segundo lapso" />
        </div>
        <div className="optConfigContainer">
            <FormControlLabel control={<Switch checked={l3} onChange={onL3Change} />} label="Habilitar el ingreso de notas del tercer lapso" />
        </div>
        <div className="optConfigContainer">
            <FormControlLabel control={<Switch checked={edit} onChange={handleEdit} />} label="Habilitar edición de notas despues de haber sido guardadas" />
        </div>
        <div className="optConfigContainer" id='periodContainer'>
          <TextField id="outlined-basic" label="Inicio del periodo escolar" variant="outlined"  type="number" value = {period} onChange = {handlePeriod} />
          <TextField id="outlined-basic" label="Fin del periodo escolar" variant="outlined"  type="number" value = {isNaN(Number.parseInt(period))? "" : Number.parseInt(period) + 1} />
          <Button variant="outlined" id='btnChangePeriod'>Cambiar</Button>
        </div>
        <div className="optConfigContainer input" >
          <TextField id="outlined-basic" label="Numero maximo de estudiantes por sección" variant="outlined"  type="number" value = {studentCap} onChange = {handleStudentCap} />
          <TextField id="outlined-basic" label="Nota maxima" variant="outlined"  type="number" value = {maxGrade} onChange = {handleGrande} />
        </div>
    </div>
}