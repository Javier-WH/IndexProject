import { MainContext } from "../../../context/MainContext"
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SchoolIcon from '@mui/icons-material/School';
import Tooltip from '@mui/material/Tooltip';
import { useContext } from 'react';


export function SubjectMenu({ sx }) {
  const { getSeccionList, changeActiveSeccion } = useContext(MainContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
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
