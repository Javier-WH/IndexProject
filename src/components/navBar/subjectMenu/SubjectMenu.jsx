import { MainContext } from "../../../context/MainContext"
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SchoolIcon from '@mui/icons-material/School';
import Tooltip from '@mui/material/Tooltip';
import { useContext } from 'react';

import {OpenModal} from '../../modal/Modal'

export function SubjectMenu({ sx }) {
  const { getSeccionList, changeActiveSeccion, dataToSave, setDataToSave } = useContext(MainContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [modal, setModal] = React.useState({state:false});

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
  };

  function handleAccept(){ /// aqui va la funcion de los cambios a guardar
    console.log("Casmbios guardados");
    setModal({ state: false });
    setDataToSave({})
  }
  function handleCancel(){
    setDataToSave({})
    setModal({ state: false });
  }

  const handleClose = (e) => {
    //revisa si existen cambios sin guardar
    if(Object.keys(dataToSave).length > 0){
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


    changeActiveSeccion(e.target.id)
    setAnchorEl(null);
  };

  function setSeccionLists(){
    let secctions = getSeccionList();
    if(secctions.length >0){
      let key = 1;
      return secctions.map(seccion => {
        return <MenuItem key={key++} id={seccion} onClick={handleClose}>{seccion}</MenuItem>
      })

    }else{
      return <MenuItem onClick={handleClose}>No hay secciones disponibles</MenuItem>
    }
  }

  return (
    <div>
      <OpenModal modal={modal} setModal={setModal}/>
      <Tooltip title="Materias Asignadas" arrow>
        <SchoolIcon sx={sx} className="NavBarIcon" onClick={handleClick} />
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          setSeccionLists()
        }

      </Menu>
    </div>
  );
}
