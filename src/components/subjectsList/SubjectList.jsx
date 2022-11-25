import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import YearSelector from "./yearSelector/Year";
import List from "./list/List";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SaveIcon from '@mui/icons-material/Save';
import Message from "../adminPanel/message/Message";


import "./seccionListModal.css";
import { useEffect } from 'react';

const style = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: "100vw",
  height: "100vh",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [year, setyear] = React.useState("");
  const [seccion, setSeccion] = React.useState("");
  const [allSeccions, setAllseccions] = React.useState([])
  const [seccionList, setSeccionList] = React.useState([]);
  const [openMessage, setOpenMessage] = React.useState(false);
  const [dataMessage, setDataMessage] = React.useState({
    type: "warning",
    message: "test"
  })
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function saveSeccions() {
 
    async function save() {
      let ask = await fetch("/matricula", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Accept": "*/*"
        },
        body: JSON.stringify(allSeccions)
      });
      if (ask.status === 200) {
        setDataMessage({
          type: "success",
          message: "Se han acutualizado el pensum"
        })
        setOpenMessage(true)
      }
    }
    save();
    
  }

  function deleteSeccion(sec) {

    let newSeccionList = allSeccions.map(list => {
      if (list.schoolYear === year) {
        list.subjects = list.subjects.filter(l => l !== sec);
      }
      return list;
    })
    setAllseccions(newSeccionList);
  }

  function addSeccion() {

    if (year < 1) {
      return
    }

    if (seccion === "") {
      return
    }

    let seccionName = seccion.charAt(0).toUpperCase() + seccion.slice(1);

    //revisa si la seccion ya está agregada
    let isExist = allSeccions.filter(s => {
      if (s.schoolYear === year) {
        if (s.subjects.includes(seccionName)) {
          return s;
        }
      }
    })

    if (isExist.length > 0) {
      return
    }

    //agrega al sección
    let sec = allSeccions.map(s => {
      if (s.schoolYear === year) {
        s.subjects.push(seccionName)
      }
      return s;
    })

    setAllseccions(sec);

    setSeccion("");

  }

  useEffect(() => {
    async function getAllSeccions() {

      let pull = await fetch("/matricula");

      if (pull.status === 404) {
        console.log("No existen secciones activas");
        return
      }

      if (pull.status === 500) {
        console.log("Ha ocurrido un error");
        return
      }

      let allSeccions = await pull.json();

      setAllseccions(allSeccions);


    }
    getAllSeccions();
  }, [])

  useEffect(() => {
    try {
      let allsubjects = allSeccions.filter(sec => sec.schoolYear === year);
      setSeccionList(allsubjects[0].subjects)
    } catch (error) {
      setSeccionList([])
    }
  }, [year, allSeccions])



  return (
    <div>
      <Button onClick={handleOpen}>Editar Materias</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Message open={openMessage} setOpen={setOpenMessage} data={dataMessage} />
          <div id="seccionCloseX" onClick={handleClose}>X</div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Configuración de las materias
          </Typography>
          <div id='seccionEditsubtitle'>Materias registradas</div>
          <div id="SeccionEditDataContainer">
            <YearSelector year={year} setyear={setyear} />
            <TextField id="seccionImputName" label="Nombre de la Materia" variant="outlined" value={seccion} onChange={e => setSeccion(e.target.value)} />
            <Button variant="outlined" onClick={addSeccion}><AddCircleIcon /></Button>
            <Button variant="outlined" onClick={saveSeccions}><SaveIcon /></Button>
          </div>
          <List seccionList={seccionList} deleteSeccion={deleteSeccion} />
        </Box>
      </Modal>
    </div>
  );
}
