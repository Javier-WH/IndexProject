import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { useContext, useEffect, useState } from 'react';
import {LogoContext} from "../../../../context/LogoContext";

import SeccionList from "../../../seccionList/SeccionListModal";
import Subjects from "../../../subjectsList/SubjectList"
import Logo from "../../../../logo.svg"

import "./config.css"

import Message from "../../message/Message"

export default function Config() {

    const {logo, setLogo, getLogo} = useContext(LogoContext);

    const [l1, setL1] = useState(true);
    const [l2, setL2] = useState(true);
    const [l3, setL3] = useState(true);
    const [edit, setEdit] = useState(false);
    const [evalPlan, setEvalplan] = useState(true)
    const [period, setPeriod] = useState(2022);
    const [studentCap, setStudentCap] = useState(30);
    const [maxGrade, setMaxGrade] = useState(20);
    const [institution, setInstitution] = useState("");
    const [failedNumber, setFailedNumber] = useState(3);

    const [open, setOpen] = useState(false)
    const[data, setData]=useState({type: "error", message:"hakuna matata"})

    function onL1Change(e) {
        setL1(e.target.checked);
    }
    function onL2Change(e) {
        setL2(e.target.checked);
    }
    function onL3Change(e) {
        setL3(e.target.checked);
    }
    function handleEdit(e) {
        setEdit(e.target.checked)
    }
    function handleEvalPlan(e){
        setEvalplan(e.target.checked)
    }
    function handlePeriod(e) {
        let value = e.target.value;
        setPeriod(value);
    }
    function handleStudentCap(e) {
        setStudentCap(e.target.value);
    }
    function handleGrande(e) {
        setMaxGrade(e.target.value)
    }
   

    useEffect(() => {
        async function getConfig() {
            try {
                let pull = await fetch("/config");
                let config = await pull.json();
                setL1(config.lap1);
                setL2(config.lap2);
                setL3(config.lap3);
                setEdit(config.edit)
                setPeriod(config.period);
                setMaxGrade(config.maxGradeCap);
                setStudentCap(config.maxSeccionCap);
                setInstitution(config.institutionName);
                setFailedNumber(config.failedNumber);
                setEvalplan(config.evalPlan)
            
            } catch (error) {
                console.log(error)
            }
        }
        getConfig();
    },[])

    function handleSendConfig(){
        let data={
            lap1:l1,
            lap2:l2,
            lap3:l3,
            evalPlan,
            edit,
            period,
            maxGradeCap: maxGrade,
            maxSeccionCap: studentCap,
            institutionName: institution,
            failedNumber
        }


        async function send(){
            let push = await fetch("/config",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                },
                body: JSON.stringify(data)
            })
            let response = await push.json();
            if(response.error){
                setData({type: "error", message: response.error});
                setOpen(true);
                return
            }
            setData({type: "success", message: "Se ha cambiado la configuración"});
            setOpen(true);
        }
        send();
    }

    function handleChangeLogo(e) {

        let file = e.target.files[0];

        if (file.type !== "image/svg+xml") {
            console.log("la imagen no es SVG");
            return
        }
        setLogo(URL.createObjectURL(file));
     

        async function pushPhoto() {
            let data = new FormData();
            data.append("file", file);
            data.append("fileName", file.name);

            let push = await fetch("/logo", {
                method: "POST",
                body: data
            });
            await push.json();

        }
        pushPhoto();

    }

    function handleRestoreLogo(){

        async function retoreLogo(){

            let ask = await fetch("/logo", {
                method: "DELETE"
            })

            if(ask.status === 200){

                getLogo();

            }
          
        }
        setLogo(Logo);
        retoreLogo();

    }

    return <div id="configContainer">
        <Message open={open} setOpen={setOpen} data={data}/>
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
        <div className="optConfigContainer">
            <FormControlLabel control={<Switch checked={evalPlan} onChange={handleEvalPlan} />} label="Solo notas final por cada lapso" />
        </div>
        <div className="optConfigContainer" id='periodContainer'>
            <TextField id="outlined-basic" label="Inicio del periodo escolar" variant="outlined" type="number" value={period} onChange={handlePeriod} />
            <TextField id="outlined-basic" label="Fin del periodo escolar" variant="outlined" type="number" value={isNaN(Number.parseInt(period)) ? "" : Number.parseInt(period) + 1} />
        </div>
        <div className="optConfigContainer input" >
            <TextField id="outlined-basic" label="Numero maximo de estudiantes por sección" variant="outlined" type="number" value={studentCap} onChange={handleStudentCap} />
            <TextField id="outlined-basic" label="Nota maxima" variant="outlined" type="number" value={maxGrade} onChange={handleGrande} />
        </div>
        <br />
        <div className="optConfigContainer namesContainer" >
            <TextField id="outlined-basic" label="Nombre de la institución" variant="outlined" fullWidth value={institution} onChange={e=>setInstitution(e.target.value)} />
            <TextField id="outlined-basic" className='numberInput' fullWidth label="Numero de materias para repetir el año" type="number" variant="outlined"  value={failedNumber} onChange={e=>setFailedNumber(e.target.value)} />
        </div>

        <div className="optConfigContainer configLogoContainer" >
           <div id="configLogoTitle"> Logo de la institución</div>
            <input type="file" id="configLogoInput"  className='invisible' onChange={handleChangeLogo}/>
            <label htmlFor='configLogoInput' id='configlogoContgainer'>
                <img src={logo} alt="" id='configLogo'/>
            </label>
            <Button variant="outlined" size="small" onClick={handleRestoreLogo} >Restaurar</Button>
        </div>
        <SeccionList/>
        <Subjects/>

        <Button variant="outlined" id='btnChangePeriod' onClick={handleSendConfig}>Cambiar</Button>
    </div>
}