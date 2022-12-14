import {getSubjectName} from "../../../libraries/translateSeccionNames"

export function Student({ data, number, seccion }) {

    //let seccionName = seccion.substring(0, seccion.length -4)
    let seccionName = getSubjectName(seccion)
  
    let grades = data.subjects[seccionName];
  
    
    if (grades !== undefined) {
        return <>
            <tr id={`index-${number}`} name={data.id}>
                <td>{number}</td>
                <td>{data.ci}</td>
                <td>{data.names}</td>
                <td>{data.lastNames}</td>
                <td id={`index-${number}-l1`} className="tableLapse">{grades.lap1}</td>
                <td id={`index-${number}-l2`} className="tableLapse">{grades.lap2}</td>
                <td id={`index-${number}-l3`} className="tableLapse">{grades.lap3}</td>
                <td id={`index-${number}-def`} className="tableLapse">{grades.def}</td>
            </tr>
        </>
    } else {
        <tr>

        </tr>
    }



}


