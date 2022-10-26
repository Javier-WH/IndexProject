import "./adminPanel.css";
import Acordion from "./acordion"
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Tooltip from '@mui/material/Tooltip';


export default function AdminPanel() {

    function handleLogOut(){
        fetch("/logout");
        window.location.reload(true);
    }

    return <>
        <div id="AdminPanelTitle">Panel de Administración del sistema
        <Tooltip title="Salir del panel de administración" arrow>
            <div id="AdminPanelLogOut" onClick={handleLogOut}> <MeetingRoomIcon /></div>
        </Tooltip>
        </div>
        <br />
        <Acordion />
    </>
}