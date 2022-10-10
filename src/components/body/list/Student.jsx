

export function Student({data, number }) {


 
    return <>
        <tr id={`index-${number}`}>
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