import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

import {StudentList} from "./StudentList"




export function MobileList() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
           <StudentList/>
        </Box>
    );
    let iconsStyle = {
        fontSize: 50,
        color: "var(--mainColor)"
    }
    return <>
        <React.Fragment key={"top"}>
            <div id="MobileListButton" onClick={toggleDrawer("top", true)}>
                <FormatListNumberedIcon sx={iconsStyle}/>
            </div>
            <SwipeableDrawer
                anchor={"top"}
                open={state["top"]}
                onClose={toggleDrawer("top", false)}
                onOpen={toggleDrawer("top", true)}
            >
                {list("top")}
            </SwipeableDrawer>
        </React.Fragment>
    </>
}

