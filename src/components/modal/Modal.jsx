import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./modal.css";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SickIcon from '@mui/icons-material/Sick';
import Button from '@mui/material/Button';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'var(--mainColor)',
    border: '2px solid #000',
    boxShadow: 24,
    color: "white",
    p: 4,
};

export function OpenModal({ modal, setModal }) {

    function handleClose() {
        setModal({ state: false });
    }

    function buttons(){
        if(modal.buttons === 1){
           return <Button variant="outlined" color="error" onClick={handleClose}> Cerrar</Button>
        }else if(modal.buttons === 2){
            return <>
                <Button variant="outlined" color="success"> Aceptar</Button>
                <Button variant="outlined" color="error"> Cancelar</Button>
            </>
        }else if(modal.buttons === 3){
            return <>
                <Button variant="outlined" color="success"> Aceptar</Button>
                <Button variant="outlined" color="error"> Cancelar</Button>
                <Button variant="outlined" onClick={handleClose}> Cerrar</Button>
            </>
        }else{
            return <Button variant="outlined" onClick={handleClose}> Cerrar</Button>
        }

    }

    return (
        <div>
            <Modal
                open={modal.state}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {getIcon(modal.type)}
                        {modal.title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {modal.message}
                    </Typography>
           
                    <div id="modalButtonContainer">
                       {buttons()}
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

function getIcon(type) {

    switch (type) {
        case "warning":
            return <ReportProblemIcon sx={{
                fontSize: 60,
                color: "yellow",
                marginLeft: "20px",
                marginRight: "30px"
            }} />
        case "message":
            return <ContactSupportIcon sx={{
                fontSize: 60,
                color: "white",
                marginLeft: "20px",
                marginRight: "30px"
            }} />
        default:
            return <SickIcon sx={{
                fontSize: 60,
                color: "orange",
                marginLeft: "20px",
                marginRight: "30px"
            }} />

    }

}