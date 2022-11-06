import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createData(ci, nombres, genero, seccion, grado, periodo) {
  return { ci, nombres, genero, seccion, grado, periodo};
}

let rows = [
  /* createData('Frozen yoghurt', 159, 6.0, 24),
   createData('Ice cream sandwich', 237, 9.0, 37),
   createData('Eclair', 262, 16.0, 24),
   createData('Cupcake', 305, 3.7, 67),
   createData('Gingerbread', 356, 16.0, 49),*/
];

export default function BasicTable({ StudentList }) {

  rows = StudentList.map(student => {
    return createData(student.ci, `${student.names} ${student.lastNames}` , student.gender, student.seccion, student.grade, student.period);
  })




  async function handleClick(ci) {

    console.log("hola");

  }


  return (<>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell style={{ color: "white" }}>Cédula</TableCell>
            <TableCell align="right" style={{ color: "white" }}>Nombres</TableCell>
            <TableCell align="right" style={{ color: "white" }}>Genero</TableCell>
            <TableCell align="right" style={{ color: "white" }}>Sección</TableCell>
            <TableCell align="right" style={{ color: "white" }}>Grado</TableCell>
            <TableCell align="right" style={{ color: "white" }}>Periodo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              onClick={() => handleClick(row.ci)}
            >
              <TableCell align="left">{row.ci}</TableCell>
              <TableCell align="right">{row.nombres}</TableCell>
              <TableCell align="right">{row.genero}</TableCell>
              <TableCell align="right">{row.seccion}</TableCell>
              <TableCell align="right">{row.grado}</TableCell>
              <TableCell align="right">{row.periodo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  );
}
