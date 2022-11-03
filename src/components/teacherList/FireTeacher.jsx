import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


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
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const handleFire = () => {
        async function fire(){

            let ft =  await fetch("/teacher", {
                method: "DELETE",
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                },
                body: JSON.stringify({ci})
            })

            let response = await ft.json();
            if(response.error){
                console.log(response.error)
            }else{
                reload();
                handleClose();
            }
        }

        fire();
    }

   

    return (
        <div>
            <Button onClick={handleOpen} variant="outlined" color="error">Despedir Profesor</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Ingrese la cédula del profesor que desea eliminar del sistema
                    </Typography>
                    <div id="fireTeachersContainer">
                        <TextField id="outlined-basic" label="Cédula del profesor" variant="outlined" fullWidth value={ci} onChange={e => { setCi(e.target.value) }} />
                        <Button onClick={handleFire} variant="outlined" color="error">Despedir Profesor</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
