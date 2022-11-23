import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({year, setyear}) {

  const handleChange = (event) => {
    setyear(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Grado Académico</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="seccionSeclectYear"
          value={year}
          label="Grado Académico"
          onChange={handleChange}
        >
          <MenuItem value={1}>Primer año</MenuItem>
          <MenuItem value={2}>Segundo año</MenuItem>
          <MenuItem value={3}>Tercer año</MenuItem>
          <MenuItem value={4}>Cuarto año</MenuItem>
          <MenuItem value={5}>Quinto año</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}