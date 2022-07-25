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
    let navigate = useNavigate();
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

            {/* POPUP START */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{
                maxWidth: 'xs',
                '& .MuiDialog-paper': { borderRadius: 3, width: '60%', maxHeight: 435 }
                }}>
                <Button variant="text" size="small" textalign='left' sx={{ paddingRight: '80%', pt:"3%" }} onClick={() => {
                    navigate(-1);
                }}>
                    <ArrowBackIosIcon sx={{ color: "#000000" }} />
                    <Typography className='backBtn' variant="button" fontSize='15' fontWeight='900' >
                    BACK
                    </Typography>
                </Button>
                <DialogTitle textAlign={'center'} variant="h5" color="#000000" component="div" sx={{ fontWeight: 'bold', pt: '5%', textTransform: "uppercase" }}>
                INSTRUCTIONS
                </DialogTitle>
                <DialogContent>
                <DialogContentText textAlign={'center'} >
                    Learn some basic chords. Feel free to pause the lesson to get a better look at the finger placement!
                </DialogContentText>
                </DialogContent>
                <DialogActions >
                <Button className='okButton' sx={{borderRadius:3}} onClick={handleClose}>
                    OK
                </Button>
                </DialogActions>
            </Dialog>
        
        </div>
    )
}