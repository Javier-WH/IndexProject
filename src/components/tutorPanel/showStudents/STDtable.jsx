import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

}));

function createData(subject, l1, l2, l3, def) {
  return { subject, l1, l2, l3, def };
}
/*
let rows = [
  createData('Matematica', 159, 6.0, 24, 4.0),
  createData('Castellano', 237, 9.0, 37, 4.3),
  createData('Biologia', 262, 16.0, 24, 6.0),
  createData('Ingles', 305, 3.7, 67, 4.3),
  createData('Informatica', 356, 16.0, 49, 3.9),
  createData('Quimica', 356, 16.0, 49, 3.9),
  createData('Fisica', 356, 16.0, 49, 3.9),
];
*/
export default function CustomizedTables({grades}) {

  const [rows, setRows] = React.useState([])
  React.useEffect(()=>{
    let r = Object.keys(grades).map(subject=>{
        let l1 = grades[subject].lap1;
        let l2 = grades[subject].lap2;
        let l3 = grades[subject].lap3;
        let def = grades[subject].def;  
        return createData(subject, l1, l2, l3, def);
        
    })
    setRows(r);
  },[grades])
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Materia</StyledTableCell>
            <StyledTableCell align="right">Primer Lapso</StyledTableCell>
            <StyledTableCell align="right">Segundo Lapso</StyledTableCell>
            <StyledTableCell align="right">Tercer Lapso</StyledTableCell>
            <StyledTableCell align="right">Acumulado / Definitivo</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.subject}
              </StyledTableCell>
              <StyledTableCell align="right">{row.l1}</StyledTableCell>
              <StyledTableCell align="right">{row.l2}</StyledTableCell>
              <StyledTableCell align="right">{row.l3}</StyledTableCell>
              <StyledTableCell align="right">{row.def}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
