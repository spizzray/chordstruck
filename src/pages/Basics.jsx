import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";

import Typography from '@material-ui/core/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';

import InfoIcon from '@mui/icons-material/Info';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// import PlayerControls from "../components/PlayerControls";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles({
    playerWrapper: {
      width: '90%',
      height: "90%",
      position: "center",
      paddingLeft: "5%",
      paddingTop:"3%",
      alignContent: 'center'
    },
  });

export default function Basics() {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <div >
        
            <Fab aria-label="add" className='infoBtn' onClick={handleClickOpen}>
            <InfoIcon className="add-icon" style={{  fill: "#000000" }}  />
            </Fab>
        
            <Box  >  
                <Container maxWidth="md" maxHeight={100} >
                    <div className={classes.playerWrapper}>
                        <ReactPlayer
                        width={"100%"}
                        height="100%"
                        url="chordbasics.mp4"
                        muted={false}
                        controls
                        />
                
                    </div>
                </Container>
            </Box>
        </div>
    )
}