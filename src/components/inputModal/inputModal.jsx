import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./inputModal.css"

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

export default function KeepMountedModal({ open, setOpen }) {

  let [input, setInput] = React.useState("");

  const handleClose = () =>{
    setOpen(false);
    setInput("");
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
          <div id="inputModalDataContainer">
            <div id="inputModalTitle">{open.title}</div>
            <TextField id="outlined-basic" label={open.label} variant="outlined" className="input" type="number" value={input} onChange={e => setInput(e.target.value)} autoComplete='off' />
            <div id="buttonContainert">
              <Button variant="outlined" onClick={()=>{open.action(input); handleClose()}} className="inputModalBTN">Enviar</Button>
              <Button variant="outlined" color="error" onClick={handleClose} className="inputModalBTN">Cancelar</Button>
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
            title: "Recuperación de contraseña",
            label: "Cédula",
            action: e=>{ console.log(e)}
        }
 */