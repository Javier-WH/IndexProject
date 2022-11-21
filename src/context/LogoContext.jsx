import { useEffect } from "react";
import { createContext, useState } from "react";
import Logo from "../logo.svg";



export const LogoContext = createContext();

export function LogoContextProvider({ children }) {

    const [logo, setLogo] = useState("");

    async function getLogo(){
        setLogo(Logo)
        let blobLogo = await fetch("/logo");
        let status = blobLogo.status;

        if(status === 200){
            let blob = await blobLogo.blob();
            setLogo(URL.createObjectURL(blob));
        }

    }   

 
 
    useEffect(()=>{
        getLogo();
    },[])

    let value ={
        logo,
        setLogo,
        getLogo
    }

    return <LogoContext.Provider value={value}>
        {children}
    </LogoContext.Provider>

}