import React from "react";

import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


const Home = () => {
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
                                    
                    <Button className="bigHomeBtn" >
                        Return to Feed
                    </Button>

                    <Button className="bigHomeBtn" >
                        Return to Feed
                    </Button>

                    <Button className="bigHomeBtn" >
                        Return to Feed
                    </Button>

                    <Button className="bigHomeBtn" >
                        Return to Feed
                    </Button>
                </Box>
            </Box>
        </div>
    )
}


export default Home;