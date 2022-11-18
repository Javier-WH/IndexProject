import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Table from "./table/Table";
import TextField from '@mui/material/TextField';
import "./teacherList.css"

import FireTeacher from "./FireTeacher";
import { useEffect } from 'react';

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
    const [stdCi, setStdCi] = React.useState("")
    const [stdName, setStdName] = React.useState("")
    const [stdGender, setStdCiGender] = React.useState("")
    const [stdSeccion, setStdSeccion] = React.useState("")
    const [stdGrade, setStdGrade] = React.useState("")
    const [stdPeriodo, setStdPeriodo] = React.useState("")





    const [open, setOpen] = React.useState(false);
    const [StudentList, setStudentList] = React.useState([]);
    const [FilteredList, setFilteredList] = React.useState([]);




    const handleOpen = () => {
        setOpen(true)
        getStudentList();
    };
    const handleClose = () => setOpen(false);


    function getStudentList() {

        async function getList() {
            let response = await fetch("/studentFullList");
            let data = await response.json();
            setStudentList(data);
            setFilteredList(data);
        }

        getList();
    }


    useEffect(() => {
        //filtro de busqueda
        setFilteredList(StudentList.filter(e => e.ci.includes(stdCi) &&
            (e.names.toLowerCase().includes(stdName.toLowerCase()) || e.lastNames.toLowerCase().includes(stdName.toLowerCase())) &&
            e.gender.toLowerCase().includes(stdGender.toLowerCase()) &&
            e.seccion.toLowerCase().includes(stdSeccion.toLocaleLowerCase()) &&
            e.grade.toString().toLowerCase().includes(stdGrade.toLowerCase()) &&
            e.period.toString().toLowerCase().includes(stdPeriodo.toLowerCase()) ))

    }, [stdCi, stdName, stdGender, stdSeccion, stdGrade, stdPeriodo])





    return (
        <div>
            <ListItemText onClick={handleOpen} primary="Lista de Estudiantes" />
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div id="headerStudentList">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Lista de Estudiantes
                        </Typography>
                        <div id="btnTeachewrListContainer">
                            <FireTeacher reload={getStudentList} />
                            <Button variant="outlined" onClick={handleClose}>Cerrar</Button>
                        </div>
                    </div>
                    <div id="studentListFilterContainer">
                        <TextField id="outlined-basic" label="Cédula" variant="outlined" value={stdCi} onChange={e => setStdCi(e.target.value)} />
                        <TextField id="outlined-basic" label="Nombres" variant="outlined" value={stdName} onChange={e => setStdName(e.target.value)} />
                        <TextField id="outlined-basic" label="Genero" variant="outlined" value={stdGender} onChange={e => setStdCiGender(e.target.value)} />
                        <TextField id="outlined-basic" label="Sección" variant="outlined" value={stdSeccion} onChange={e => setStdSeccion(e.target.value)} />
                        <TextField id="outlined-basic" label="Grado" variant="outlined" value={stdGrade} onChange={e => setStdGrade(e.target.value)} />
                        <TextField id="outlined-basic" label="Periodo" variant="outlined" value={stdPeriodo} onChange={e => setStdPeriodo(e.target.value)} />


                    </div>

                    <div id="StudentListContainer">
                        <Table StudentList={FilteredList} />
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

