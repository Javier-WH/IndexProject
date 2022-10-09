export function Student({data, number }) {

    return <>
        <tr id={`student-${data.id}`}>
            <td>{number}</td>
            <td>{data.ci}</td>
            <td>{data.names}</td>
            <td>{data.lastNames}</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td> 
        </tr>
    </>


}