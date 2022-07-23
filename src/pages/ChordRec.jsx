import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";

import Typography from '@material-ui/core/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import PlayerControls from "../components/PlayerControls";
import ReactPlayer from "react-player";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import mp3 from "./Wonderwall.mp3";

const useStyles = makeStyles({
  playerWrapper: {
    width: '100%',
    height: "100%",
    position: "center",
  },
});

const ChordRec = () => {
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
      <Box className='songTitle'>
        <Typography  variant="h5"  style={{ color:"#000000"}} >
          WONDERWALL BY OASIS
        </Typography>
      </Box>

      <Box >  
        <Container maxWidth="md" maxHeight={100}>
          <div className={classes.playerWrapper}>
            <ReactPlayer
              width={"100%"}
              height="100%"
              url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              muted={true}
              playing={false}
            />
          
          </div>
        </Container>
      </Box>

      <Box className='playerBox'>
        <AudioPlayer />
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
        <DialogTitle textAlign={'center'} variant="h5" color="#000000" component="div" sx={{ fontWeight: 'bold', pt: '5%', textTransform: "uppercase" }}>
          INSTRUCTIONS
        </DialogTitle>
        <DialogContent>
          <DialogContentText textAlign={'center'} >
            Follow the chords
          </DialogContentText>
        </DialogContent>
        <DialogActions >
          <Button className='okButton' sx={{borderRadius:3}} onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    {/* POP UP END */}

    </div>
  );
}
class AudioPlayer extends React.Component {
  render() {
    return (
      <div >
        <Box marginTop='0%' >
          <audio className="player"  ref="audio_tag" src={mp3} controls  />
        </Box>
      </div>
    );
  }
}


export default ChordRec;

