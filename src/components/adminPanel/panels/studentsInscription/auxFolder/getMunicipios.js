import infoVenezuela from "./getInfo"

export default function getMunicipios(State){

    if(State === "Otro"){
        return ["Otro"]
    }

    let municipios = [];
    infoVenezuela().map(register => {
        if (register.estado === State) {
            municipios =  register.municipios.map(muni => {
                return muni.municipio;
            })
        }
        return 1
    })
    return municipios;
}