import "./navBar.css";
import {MainContext} from "../../context/MainContext"
import { SubjectMenu } from "./subjectMenu/SubjectMenu";
import{MainMenu} from "./mainMenu/MainMenu"


import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Tooltip from '@mui/material/Tooltip';
import { useContext } from "react";

export function NavBar() {

const {SaveData} = useContext(MainContext)

    let iconsStyle = {
        fontSize: 50,
        color: "white"
    }


    return <div id="NavBar">
        <div id="navBarContainer">
            <MainMenu/>
            <div id="iconsContainer">
                <Tooltip title="Imprimir Nomina" arrow>
                    <LocalPrintshopIcon className="NavBarIcon" sx={iconsStyle} />
                </Tooltip>
                <Tooltip title="Guardar Cambios" arrow>
                    <SaveOutlinedIcon className="NavBarIcon" sx={iconsStyle} onClick={SaveData}/>
                </Tooltip>
                <SubjectMenu sx={iconsStyle} />
            </div>
        </div>
    </div>
}