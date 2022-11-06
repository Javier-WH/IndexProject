import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GradeIcon from '@mui/icons-material/Grade';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SchoolIcon from '@mui/icons-material/School';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

import TeacherList from "../../../teacherList/teacherList";
import RegisteredStudents from "../../../registeredStuidents/StudentList"

export default function NestedList() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (<>
        <TeacherList />
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
                <TeacherList />

            </ListItemButton>
    

            <ListItemButton>
                <ListItemIcon>
                    <SchoolIcon />
                </ListItemIcon>
                <RegisteredStudents />

            </ListItemButton>



            <ListItemButton>
                <ListItemIcon>
                    <GradeIcon />
                </ListItemIcon>
                <ListItemText primary="Record académico" />
            </ListItemButton>

        </List>


    </>
    );
}
