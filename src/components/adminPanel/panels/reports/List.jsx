import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import GradeIcon from '@mui/icons-material/Grade';
import PeopleIcon from '@mui/icons-material/People';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SchoolIcon from '@mui/icons-material/School';
import RecentActorsIcon from '@mui/icons-material/RecentActors';


export default function NestedList() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
    
        >
            <ListItemButton>
                <ListItemIcon>
                    <SummarizeIcon />
                </ListItemIcon>
                <ListItemText primary="Bitacora" />
            </ListItemButton>
          
            <ListItemButton>
                <ListItemIcon>
                    <RecentActorsIcon />
                </ListItemIcon>
                <ListItemText primary="Lista de profesores" />
            </ListItemButton>
            {/////////////////////////////////////////////////////////////////////
            }

            
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="Estudiantes" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Lista de estudiantes inscritos" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Lista de estudiantes preinscritos" />
                    </ListItemButton>
                </List>
            </Collapse>

            
            <ListItemButton>
                <ListItemIcon>
                    <GradeIcon />
                </ListItemIcon>
                <ListItemText primary="Record académico" />
            </ListItemButton>

        </List>


    );
}
