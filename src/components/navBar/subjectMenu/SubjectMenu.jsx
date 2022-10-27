import { MainContext } from "../../../context/MainContext"
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SchoolIcon from '@mui/icons-material/School';
import Tooltip from '@mui/material/Tooltip';
import { useContext, useEffect, useState } from 'react';
import { OpenModal } from '../../modal/Modal'

import { getTeacherSeccions } from "../../../fetch/fetchSeccions";
import Message from "../../message/Message"


export function SubjectMenu({ sx }) {
  const { changeActiveSeccion, dataToSave, setDataToSave, SaveData } = useContext(MainContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [modal, setModal] = useState({ state: false });
  const [list, setTlist] = useState(["No se encontraron secciones asignadas"])

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };

  function handleAccept() { /// aqui va la funcion de los cambios a guardar
    let status = SaveData()
    setModal({ state: false });
    console.log(status)
  }
  function handleCancel() {
    setDataToSave({})
    setModal({ state: false });
  }

  const handleClose = (e) => {
    //revisa si existen cambios sin guardar
    if (Object.keys(dataToSave).length > 0) {
      setModal({
        state: true,
        title: "Advertencia",
        message: "Tiene datos sin guardar",
        buttons: 3,
        type: "warning",
        handleAccept,
        handleCancel
      })
      document.getElementById("lap1").classList.remove("error");
      document.getElementById("lap2").classList.remove("error");
      document.getElementById("lap3").classList.remove("error");
    }

    //console.log(e.target.id)
    changeActiveSeccion(e.target.id)
    setAnchorEl(null);
  };

  useEffect(() => {
    getTeacherSeccions().then(response => response.json())
      .then(teacherSeccions => {
        if (teacherSeccions.length > 0) {
          const subjects = Object.keys(teacherSeccions[0]);
          let seccions = subjects.map(subjec => {
            return teacherSeccions[0][subjec].map(sec => {
              return `${subjec} ${sec}`;
            })
          })
          let _list = seccions.flat();
          setTlist(_list)
           /*eslint-disable*/
          changeActiveSeccion(_list[0])
        }
      })
      .catch(error=>{
        console.log(error)
        setTlist([]);
      
      })
  }, [])


  let key = 1;
  return (
    <div>
      <Message/>
      <OpenModal modal={modal} setModal={setModal} />
      <Tooltip title="Materias Asignadas" arrow>
        <SchoolIcon sx={sx} className="NavBarIcon" onClick={handleClick} />
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      
      >
        {

          list.map(seccion => {
            return <MenuItem key={key++} id={seccion} onClick={handleClose}>{seccion}</MenuItem>
          })
        }

      </Menu>
    </div>
  );
}
