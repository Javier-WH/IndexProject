import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function DisabledTabs({value, setValue}) {

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="tabsNav">
    <Tabs value={value} onChange={handleChange} aria-label="Seleccion de ingreso">
      <Tab label="Profesores" className='tabItem'/>
      <Tab label="Representantes" className='tabItem'/>
      <Tab label="Administradores" className='tabItem'/>
    </Tabs>
    </div>
  );
}
