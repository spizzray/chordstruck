import React from "react";
import { useNavigate } from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


const Home = () => {
    let navigate = useNavigate();
    return (
        <div className = "App" >
            <Box height="100vh" display="flex" flexDirection="column"
                sx={{
                background: '#FFFFFF',
                position: 'relative',
                overflow: 'auto',
                display: 'flex', 
                
                }}>
                <Box justifyContent="space-between" sx={{ display: 'flex', m: '10% 1% 1% 1%' }}>
                                    
                    <Button className='bigHomeBtn'>
                        BASICS
                    </Button>

                    <Button className="bigHomeBtn" onClick={() => {navigate('/chordRec')}} >
                        LEARN A SONG
                    </Button>

                    <Button className="bigHomeBtn" >
                       TUNING
                    </Button>

                    <Button className="bigHomeBtn" >
                        SETTINGs
                    </Button>
                </Box>
            </Box>
        </div>
    )
}


export default Home;