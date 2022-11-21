import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HelpIcon from '@mui/icons-material/Help';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Logo } from "../../logo/Logo";

import {LogoContext} from "../../../context/LogoContext"


import Perfil from "../../perfilTeacher/TeacherPerfil"

import Info from "../../info/Info"

import "./mainMenu.css";
import { useEffect, useState } from 'react';




export function MainMenu({setPrintTeacerName}) {

    const {logo} = React.useContext(LogoContext);

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const [user, setUser] = useState("Esperando...");
    const [userCi, setUserCi] = useState("");
   
    const [openPerfil, setOpenPerfil] = useState({
        teacher:"",
        state: false
      });
    const [openInfo, setOpenInfo] = useState(false);


    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    function handleLogOut(){
        fetch("/logout");
        window.location.reload(true);
    }
//////////////////////////////////
    async function handleperfil(ci) {
        let pull = await fetch(`/teacher?ci=${ci}`);
        let teacher = await pull.json();
        
        setOpenPerfil({
          teacher,
          state: true
        })
    
      }    
///////////////////////////////////
    useEffect(()=>{
        fetch("/getUserName").then(e=> e.json())
        .then(userData=> {
            setUser(userData.name); 
            /*eslint-disable*/
            setPrintTeacerName(userData.name)
            setUserCi(userData.ci);
        })
        .catch(error => setUser("error"))
    },[])
    

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText id="teacherName" primary={user} onClick={()=>handleperfil(userCi)}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HelpIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Información" onClick={()=>{setOpenInfo(true)}} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding >
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Salir" onClick={handleLogOut}/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
    return <>
       <Perfil open= {openPerfil} setOpen={setOpenPerfil} editable = {false}/>
        <Info open={openInfo} setOpen={setOpenInfo}/>

        <React.Fragment key={"left"}>
            <label id="logoContainer" onClick={toggleDrawer("left", true)}>
                <img src={logo} alt="" id='navBarLogo' />
            </label>
            <SwipeableDrawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
            >
                {list("left")}
            </SwipeableDrawer>
        </React.Fragment>
    </>

}
