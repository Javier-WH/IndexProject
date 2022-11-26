import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function DenseTable({ evalData, setEvalData, evalCount, lapse }) {

   
    /*eslint-disable*/
    const [eval1P, setEval1P] = React.useState(1);
    const [eval2P, setEval2P] = React.useState(2);
    const [eval3P, setEval3P] = React.useState(3);
    const [eval4P, setEval4P] = React.useState(4);
    const [eval5P, setEval5P] = React.useState(5);
    const [eval6P, setEval6P] = React.useState(6);


    //cambia las notas dependiendo el lapso escogido
    React.useEffect(()=>{
        try {
            setEval1P(evalData[lapse][0])
            setEval2P(evalData[lapse][1])
            setEval3P(evalData[lapse][2])
            setEval4P(evalData[lapse][3])
            setEval5P(evalData[lapse][4])
            setEval6P(evalData[lapse][5])
        } catch (error) {
            
        }
            
    },[lapse])

    



    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {
                            evalCount.map(i => <TableCell align="center" sx={{ color: "white", fontSize: "12px" }}>{`Evaluación ${i}`}</TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                        
                    <TableRow className='EvaluationTableRowRow'>
                        {
                            evalCount.map(i => <TableCell align="center" sx={{ fontSize: "12px" }} className="EvaluationTableRow">
                                {/*eslint-disable*/}
                                <input value={eval(`eval${i}P`)} onChange={e => eval(`setEval${i}P`)(e.target.value)} className="EvaluationTableInput" />
                                %
                            </TableCell>)

                        }
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    );
}