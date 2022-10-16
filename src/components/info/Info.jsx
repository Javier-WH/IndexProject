import logo from "./logo.svg";
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import "./info.css"


export default function BasicModal({ open, setOpen }) {


  const handleClose = () => setOpen(false);


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

  return (
    <div>

      <Modal
        open={open}

      >
        <Box sx={style} id="perfilBOX">
          <div id="infoContainer">
            <img src={logo} alt="" width="150" />
            <div id="infoIfo">
              <div className="infoInfo"> INDEX Software </div>
              <div className="infoInfo"> Version alpha 0.1 - 2022</div>
              <div className="infoInfo"> Creado por Francisco Rodríguez</div>
            </div>
          </div>
            <Button variant="outlined" onClick={handleClose} id="btnAccpet">Aceptar</Button>
        </Box>
      </Modal>
    </div>
  );
}
