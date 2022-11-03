import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Table from "./table/Table"
import "./teacherList.css"

import FireTeacher from "./FireTeacher";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "100%",
    height: "100%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const [teacherList, setTeacherList] = React.useState([])
    const handleOpen = () => {
        setOpen(true)
        getTeacherList();
    };
    const handleClose = () => setOpen(false);


    function getTeacherList() {

        async function getList() {
            let response = await fetch("/teacherList");
            let data = await response.json();
            setTeacherList(data)
        }

        getList();
    }



    return (
        <div>
            <ListItemText onClick={handleOpen} primary="Lista de profesores" />
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div id="headerTeacherList">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Lista de profesores
                        </Typography>
                        <div id="btnTeachewrListContainer">
                            <FireTeacher reload={ getTeacherList}/>
                            <Button variant="outlined" onClick={handleClose}>Cerrar</Button>
                        </div>
                    </div>

                    <div id="teacherListContainer">
                        <Table teacherList={teacherList} />
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

