import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import Message from "../adminPanel/message/Message"
import { useState } from 'react';


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


export default function BasicModal({reload}) {
    const [ci, setCi] = React.useState("")
    const [open, setOpen] = React.useState(false);
    const [openMessage, setOpenMessage] = useState(false)
    const [dataMessage, setDataMessage] = useState({type: "error", message: ""});
    
    
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    


    const handleFire = () => {
        async function fire(){

            let ft =  await fetch("/student", {
                method: "DELETE",
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                },
                body: JSON.stringify({ci})
            })

            let response = await ft.json();
            if(response.error){
                setDataMessage({
                    type: "error", 
                    message: response.error
                });
                setOpenMessage(true)
            }else{
                reload();
                handleClose();
            }
        }

        fire();
    }

   

    return (
        <div>
            <Message open ={openMessage} setOpen={setOpenMessage} data={dataMessage}/>
            <Button onClick={handleOpen} variant="outlined" color="error">Expulsar estudiante</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Ingrese la cédula del estudiante que desea eliminar del sistema
                    </Typography>
                    <div id="fireTeachersContainer">
                        <TextField id="outlined-basic" label="Cédula del estudiante" variant="outlined" fullWidth value={ci} onChange={e => { setCi(e.target.value) }} />
                        <Button onClick={handleFire} variant="outlined" color="error">Expulsar Estudiante</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
