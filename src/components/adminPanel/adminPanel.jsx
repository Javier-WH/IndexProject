import "./adminPanel.css";
import Acordion from "./acordion"
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Tooltip from '@mui/material/Tooltip';


export default function AdminPanel() {

    return <>
        <div id="AdminPanelTitle">Panel de Administración del sistema
        <Tooltip title="Salir del panel de administración" arrow>
            <div id="AdminPanelLogOut"> <MeetingRoomIcon /></div>
        </Tooltip>
        </div>
        <br />
        <Acordion />
    </>
}