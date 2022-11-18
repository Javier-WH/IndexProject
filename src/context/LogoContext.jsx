import { useEffect } from "react";
import { createContext, useState } from "react";
import Logo from "../logo.svg";



export const LogoContext = createContext();

export function LogoContextProvider({ children }) {

    const [logo, setLogo] = useState("")
 
    useEffect(()=>{
        setLogo(Logo)
    },[])

    let value ={
        logo,
        setLogo
    }

    return <LogoContext.Provider value={value}>
        {children}
    </LogoContext.Provider>

}