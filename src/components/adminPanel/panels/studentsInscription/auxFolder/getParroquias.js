import infoVenezuela from "./getInfo";

export default function getParroquias(estado, municipio) {
    if(estado === "" || estado === undefined || municipio === "" || municipio === undefined){
        return [];
    }
   
    try {
        let parroquias = [];
        infoVenezuela().map(registro => {
            if (registro.estado === estado) {
                registro.municipios.map(muni => {
                    if (muni.municipio === municipio) {
                        parroquias = muni.parroquias
                    }
                    return 0
                })
            }
            return 0
        })
        
        return parroquias;
    } catch (error) {
        console.log(error.message)
        return [];
    }
}