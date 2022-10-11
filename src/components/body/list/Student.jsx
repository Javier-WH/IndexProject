

export function Student({ data, number, seccion }) {

    let seccionArray = seccion.split(" ");
    let seccionName = seccionArray[0];
    let grades = data.subjects[seccionName];
   

    if (grades !== undefined) {
        return <>
            <tr id={`index-${number}`} name={data.id}>
                <td>{number}</td>
                <td>{data.ci}</td>
                <td>{data.names}</td>
                <td>{data.lastNames}</td>
                <td>{grades.lap1}</td>
                <td>{grades.lap2}</td>
                <td>{grades.lap3}</td>
                <td>{grades.def}</td>
            </tr>
        </>
    } else {
        <tr>

        </tr>
    }



}