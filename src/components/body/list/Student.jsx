import { useContext } from "react"
import {MainContext} from "../../../context/MainContext"

export function Student({data, number }) {

    const {setSlectedStudent} = useContext(MainContext);

 
    return <>
        <tr id={`index-${number}`} onClick={()=>{setSlectedStudent(number)}}>
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