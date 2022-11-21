//import IndexLogo from "../../../../logo.svg";
import {LogoContext} from "../../../../context/LogoContext"
import { useContext } from "react";

export function Logo() {

   //let type = "Batalla"
   //let type = "razetti"
    let type = "Index"

    const {logo} = useContext(LogoContext);


    return <img src={logo} alt="" id="indexLogo" className={type}/>


}