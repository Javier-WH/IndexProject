import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(ci, Nombres, Telefono, Email) {
  return { ci, Nombres, Telefono, Email };
}

let rows = [
 /* createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),*/
];

export default function BasicTable({teacherList}) {
    
    rows = teacherList.map(teacher=>{
        return createData(teacher.ci, `${teacher.names} ${teacher.lastNames}`, teacher.phone, teacher.email);
    })


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell style={{color: "white"}}>Cédula</TableCell>
            <TableCell align="right" style={{color: "white"}}>Nombres</TableCell>
            <TableCell align="right" style={{color: "white"}}>Teléfono</TableCell>
            <TableCell align="right" style={{color: "white"}}>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell align="left">{row.ci}</TableCell>
              <TableCell align="right">{row.Nombres}</TableCell>
              <TableCell align="right">{row.Telefono}</TableCell>
              <TableCell align="right">{row.Email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
