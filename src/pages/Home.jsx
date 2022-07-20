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
            background: '#737373',
            position: 'relative',
            overflow: 'auto',
            display: 'flex', 
            
            }}>
            <Box justifyContent="space-between" sx={{ display: 'flex', m: '1% 1% 1% 1%' }}>
                                
                <Button variant="outlined" size="small" sx={{borderRadius:8 ,fontSize: 15, fontWeight: "bold", p:'1%  10% 1% 10%'}} >
                    Return to Feed
                </Button>

                <Button variant="outlined" size="small" sx={{borderRadius:8 ,fontSize: 15, fontWeight: "bold", backgroundColor: "#988bf5", p:"10% 10% 10% 10%" }} >
                    Return to Feed
                </Button>

                <Button variant="outlined" size="small" sx={{borderRadius:8 ,fontSize: 15, fontWeight: "bold",  backgroundColor: "#988bf5", p:"10% 10% 10% 10%" }} >
                    Return to Feed
                </Button>

                <Button classname='home-button' variant="outlined" size="small" sx={{borderRadius:8 ,fontSize: 15, fontWeight: "bold",  backgroundColor: "#988bf5", p:"10% 10% 10% 10%" }} >
                    Return to Feed
                </Button>
            </Box>
        </Box>
    </div>
  )
}


export default Home;