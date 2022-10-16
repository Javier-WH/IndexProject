import * as React from 'react';
import "./perfilTeacher.css";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';



export default function BasicModal({ open, setOpen, userID }) {
  const [names, setNames] = useState();
  const [lastNames, setLastNames] = useState();
  const [ci, setCi] = useState();
  const [gender, setGender] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [pass, setPass] = useState("************");
  

  const handleClose = () => setOpen(false);
  
  function handleChangeNames(e){
    setNames(e.target.value);
  }
  function handleChangelastNames(e){
    setLastNames(e.target.value);
  }
  function handleChangeCi(e){
    setCi(e.target.value);
  }
  function handleChangeGender(e){
    setGender(e.target.value);
  }
  function handleChangeEmail(e){
    setEmail(e.target.value);
  }
  function handleChangePhone(e){
    setPhone(e.target.value);
  }
  function handleChangePass(e){
    setPass(e.target.value);
  }
  
  function handleSave(){
    
    console.log("Datos guardados");
    setOpen(false);
    
  }
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };




  useEffect(()=>{
      /*eslint-disable*/
    fetch(`/getTeacherData?id=${userID}`).then(response=> response.json())
    .then(data=>{
      setNames(data.names);
      setLastNames(data.lastNames);
      setCi(data.ci);
      setGender(data.gender);
      setEmail(data.email);
      setPhone(data.phone);
    })

  },[])



  return (
    <div>

      <Modal
        open={open}
   
      >
        <Box sx={style} id="perfilBOX">
          <div id='perfilContainer'>
            <div id="perfilXcontainer"> <div id="perfilX" onClick={handleClose}>X</div> </div>
            <label id='perfilTitle'> Perfil del profesor</label>

            <TextField label="Nombres" id="outlined-size-small" size="small" className='inpuitPerfil' value={names} onChange={handleChangeNames}/>
            <TextField label="Apellidos" id="outlined-size-small" size="small" className='inpuitPerfil' value={lastNames} onChange={handleChangelastNames}/>
            <div id="ciGenContainer">
            <TextField label="Cédula" id="outlined-size-small" size="small" className='inpuitPerfil' value={ci} onChange={handleChangeCi}/>
            <TextField label="Género" id="outlined-size-small" size="small" className='inpuitPerfil' value={gender} onChange={handleChangeGender}/>
            </div>
            <TextField label="Email" id="outlined-size-small" size="small" className='inpuitPerfil' value={email} onChange={handleChangeEmail}/>
            <TextField label="Télefono" id="outlined-size-small" size="small" className='inpuitPerfil' value={phone} onChange={handleChangePhone}/>
            <div id="perfilPasswordContainer">
              <TextField label="Contraseña" type="password" id="outlined-size-small" size="small" className='inpuitPerfil' value={pass} onChange={handleChangePass} InputProps={{readOnly: true}}/>
              <Button variant="outlined">Recuperar contraseña</Button>
            </div>
            <div id="perfilSubjectContainer">
              <label id='perfilSubjectTitle'>Materias asignadas</label>
              <div id="subjectBox"></div>
            </div>
            <Button variant="outlined" onClick={handleSave}>Aceptar</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
