import logo from "../../logo.svg";

let logoStyles={
    "width":"100%" 
}

export function Logo(){
    return <img src= {logo} alt="" id="logo" style={logoStyles}/>
}