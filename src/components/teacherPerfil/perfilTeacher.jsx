import * as React from 'react';
import "./perfilTeacher.css";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, setOpen, userID }) {
  const handleClose = () => setOpen(false);


  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <div id='perfilContainer'>

            <label id='perfilTitle'> Perfil del profesor</label>

            <TextField label="Nombres" id="outlined-size-small" size="small" className='inpuitPerfil' />
            <TextField label="Apellidos" id="outlined-size-small" size="small" className='inpuitPerfil' />
            <TextField label="Cédula" id="outlined-size-small" size="small" className='inpuitPerfil' />
            <TextField label="Género" id="outlined-size-small" size="small" className='inpuitPerfil' />
            <TextField label="Email" id="outlined-size-small" size="small" className='inpuitPerfil' />
            <TextField label="Télefono" id="outlined-size-small" size="small" className='inpuitPerfil' />
            <div id="perfilPasswordContainer">
              <TextField label="Contraseña" type="password" id="outlined-size-small" size="small" className='inpuitPerfil' />
              <Button variant="outlined">Recuperar contraseña</Button>
            </div>
            <div id="perfilSubjectContainer">
              <label id='perfilSubjectTitle'>Materias asignadas</label>
              <div id="subjectBox"></div>
            </div>
            <Button variant="outlined" onClick={handleClose}>Aceptar</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
