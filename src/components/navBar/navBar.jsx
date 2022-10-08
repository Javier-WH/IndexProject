import "./navBar.css";
import { Logo } from "../logo/Logo";
import {SubjectMenu} from "./subjectMenu/SubjectMenu"
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

export function NavBar() {

    let iconsStyle = {
        fontSize: 50,
        color: "white"
    }

    return <div id="NavBar">
        <div id="navBarContainer">
            <div id="logoContainer">
                <Logo />
            </div>
            <div id="iconsContainer">
                <LocalPrintshopIcon className="NavBarIcon" sx={iconsStyle} />
                <SaveOutlinedIcon className="NavBarIcon" sx={iconsStyle} />
                <SubjectMenu/>
            </div>
        </div>
    </div>
}