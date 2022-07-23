import React from "react";
import { useNavigate } from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


const Settings = () => {
    let navigate = useNavigate();
    return (
        <div className = "App" >
            <Typography className='songTitle' variant="h5"  style={{ color:"#000000", marginTop: '60px'}} >
                SETTINGS
            </Typography>

            <Box paddingTop={1} width={500}>
                <Button className='settingBtn'>
                    CONNECT TO CLOUD
                </Button>
                <Button className='settingBtn'>
                    LANGUAGE
                </Button>
                <Button className='settingBtn'>
                    FEEDBACK
                </Button>
            </Box>

            
        </div>
    )
}


export default Settings;