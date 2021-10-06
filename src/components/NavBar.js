import React from 'react';
import { AppBar, Box, Typography,Tooltip  } from '@mui/material';

const NavBar = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ backgroundColor: 'RGB(0,128,128)' }}>
                    <Box style={{ display: 'flex' }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ padding: "15px" }}>
                            Corona Tracker
                        </Typography>
                        <Typography variant="h6" component="div" style={{ padding: "15px" }}>
                        <Tooltip title="Developer Linkedin Profile">
                            <a href='https://www.linkedin.com/in/nusratjahan35/'>
                                <i class="fab fa-linkedin" style={{ marginRight: "8px",color:'white' }}></i>
                            </a>
                        </Tooltip>
                        <Tooltip title="Developer Github Profile">
                            {/* <i class="fab fa-facebook-square" style={{ marginRight: "8px" }}></i> */}
                            <a href='https://github.com/nusrat35' style={{color:'white'}}><i class="fab fa-github-square"></i></a>
                        </Tooltip>
                        </Typography>
                    </Box>
                </AppBar>
            </Box>
        </>
    )
}
export default NavBar;
