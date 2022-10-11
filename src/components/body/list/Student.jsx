

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
                <td id={`index-${number}-l1`}>{grades.lap1}</td>
                <td id={`index-${number}-l2`}>{grades.lap2}</td>
                <td id={`index-${number}-l3`}>{grades.lap3}</td>
                <td id={`index-${number}-def`}>{grades.def}</td>
            </tr>
        </>
    } else {
        <tr>

        </tr>
    }



}