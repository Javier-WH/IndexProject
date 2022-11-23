import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



export default function BasicList({ seccionList, deleteSeccion}) {
    let key = 1;
  
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
                <List>
                    {
                        seccionList.map(seccion => {
                            return <ListItem disablePadding key={key++}>
                                <ListItem>
                                    <ListItemIcon>
                                        <HistoryEduIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={seccion} />
                                </ListItem>
                                <ListItemButton onClick={()=>deleteSeccion(seccion)}>
                                    <DeleteForeverIcon />
                                </ListItemButton>
                            </ListItem>
                        })
                    }
                </List>
            </nav>
        </Box>
    );
}
