import "./navBar.css";
import { MainContext } from "../../context/MainContext"
import { SubjectMenu } from "./subjectMenu/SubjectMenu";
import { MainMenu } from "./mainMenu/MainMenu"


import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Tooltip from '@mui/material/Tooltip';
import { useContext, useRef } from "react";


import ReactToPrint from "react-to-print";


export function NavBar() {

    const { SaveData } = useContext(MainContext)

    const componentRef = useRef();

    let iconsStyle = {
        fontSize: 50,
        color: "white"
    }


    return <div id="NavBar" ref={componentRef}>
        <div id="navBarContainer" >
            <MainMenu />
            <div id="iconsContainer">
                <ReactToPrint
                    trigger={() => <Tooltip title="Imprimir Nomina" arrow>
                                        <LocalPrintshopIcon className="NavBarIcon" sx={iconsStyle} />
                                    </Tooltip>}
                    content={() => componentRef.current}
                />

                <Tooltip title="Guardar Cambios" arrow>
                    <SaveOutlinedIcon className="NavBarIcon" sx={iconsStyle} onClick={SaveData} />
                </Tooltip>
                <SubjectMenu sx={iconsStyle} />
            </div>
        </div>

    </div>
}