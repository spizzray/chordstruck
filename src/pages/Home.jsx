import React,  { Component } from "react";
import { useNavigate } from "react-router-dom";
import Wave from 'react-wavify'

import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tuning from "./Tuning";
import iconbg from "../assets/iconbg.png";
import { display } from "@mui/system";

const styles = {
    paperContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
       
    }
};

const Home = () => {
    let navigate = useNavigate();
    return (
        <div className = "App" >
            <Box height="100%" display="flex" flexDirection="column" style={styles.paperContainer}
                sx={{
                position: 'relative',
                overflow: 'auto',
                display: 'flex', 
                }}>
                <Box className = 'trans' justifyContent="space-between" sx={{ background: "transparent", display: 'flex', m: '10% 1% 0% 1%' }}>
                                    
                    <Button className='bigHomeBtn' onClick={() => {navigate('/basics')}} sx={{
                        animation: "spin 2s linear infinite",
                        "@keyframes spin": {
                        "0%": {
                            transform: "translate(0px, 1px)",
                        },
                        "50%": {
                            transform: "translate(0px, -2px)",
                        },
                        "100%": {
                            transform: "translate(0px, 1px)",
                        },
                        },
                    }}>
                        BASICS
                    </Button>

                    <Button className="bigHomeBtn" onClick={() => {navigate('/chordRec')}} sx={{
                        animation: "spin 2s linear infinite",
                        "@keyframes spin": {
                        "0%": {
                            transform: "translate(0px, -2px)",
                        },
                        "50%": {
                            transform: "translate(0px, 1px)",
                        },
                        "100%": {
                            transform: "translate(0px, -2px)",
                        },
                        },
                    }}>
                        LEARN A SONG
                    </Button>

                    <Button className="bigHomeBtn" onClick={() => {navigate('/tuning')}}  sx={{
                        animation: "spin 2s linear infinite",
                        "@keyframes spin": {
                        "0%": {
                            transform: "translate(0px, 1px)",
                        },
                        "50%": {
                            transform: "translate(0px, -2px)",
                        },
                        "100%": {
                            transform: "translate(0px, 1px)",
                        },
                        },
                    }}>
                       TUNING
                    </Button>

                    <Button className="bigHomeBtn" onClick={() => {navigate('/settings')}} sx={{
                        animation: "spin 2s linear infinite",
                        "@keyframes spin": {
                        "0%": {
                            transform: "translate(0px, -2px)",
                        },
                        "50%": {
                            transform: "translate(0px, 1px)",
                        },
                        "100%": {
                            transform: "translate(0px, -2px)",
                        },
                        },
                    }}>
                        SETTINGS
                    </Button>
                    
                </Box>
                <Wave fill='#d3c2f4'
                paused={false}
                options={{
                height: 0,
                amplitude: 50,
                speed: 0.15,
                points: 5
                }}
            />
            </Box>
        </div>
    )
}


export default Home;