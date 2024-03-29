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

// import mp3 from "public/Wonderwall.mp3";
import mp4 from "./chordbasicb.mp4";

const useStyles = makeStyles({
  playerWrapper: {
    width: '100%',
    height: "100%",
    position: "center",
  },
});

const ChordRec = () => {
  const classes = useStyles();
  let navigate = useNavigate();

  // const [videoFilePath, setVideoFilePath] = useState(null);
  // const handleVideoUpload = (event) => {
  //   setVideoFilePath(URL.createObjectURL(event.target.files[0]));
  //   };
  
  // <input type="./chords.mp4" onChange={handleVideoUpload} />

  const [open, setOpen] = useState(true);
  const [openinstruct, setInstruct] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const instuctClickOpen = () => {
    setInstruct(true);
  };

  const instructClose = () => {
    setInstruct(false);
  };


  return (
    <div >
      <Box className='songTitle' >
        <Typography  variant="h5" >
          PERFECT BY ED SHEERAN
        </Typography>
      </Box>

      <Fab aria-label="add" className='infoBtn' onClick={instuctClickOpen}>
          <InfoIcon className="add-icon" style={{  fill: "#000000" }}  />
      </Fab>

      <Box paddingTop={1} >  
        <Container maxWidth="md" maxHeight={100}>
          <div className={classes.playerWrapper}>
            <ReactPlayer
              width={"100%"}
              height="100%"
              url={mp4}
              muted={false}
              controls
              
            />
          
          </div>
        </Container>
      </Box>

      {/* <Box className='playerBox'>
        <AudioPlayer />
      </Box> */}
    {/* POPUP START */}
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          maxWidth: 'xs',
          '& .MuiDialog-paper': { borderRadius: 3, width: '60%', p: '1% 1% 3% 1%'}
        }}>
        <DialogActions>
          <Button variant="text" size="small" textalign='left' sx={{ paddingRight: '80%' }} onClick={() => {
            navigate(-1);
          }}>
            <ArrowBackIosIcon sx={{ color: "#000000" }} />
            <Typography className='backBtn' variant="button" fontSize='15' fontWeight='900' >
              BACK
            </Typography>
          </Button>
        </DialogActions>
        <DialogActions >
          <Button className='songButton' sx={{borderRadius:3}} onClick={handleClose}>
            NEW SONG
          </Button>
          <Button className='songButton' sx={{borderRadius:3}} onClick={handleClose}>
            CURRENT SONG
          </Button>
        </DialogActions>
      </Dialog>
    {/* POP UP END */}

    {/* POPUP START */}
      <Dialog
        open={openinstruct}
        onClose={instructClose}
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
            Play along with the song! Our AI will tell you if you need to adjust your sound. Feel free to slow the song down too!
          </DialogContentText>
        </DialogContent>
        <DialogActions >
          <Button className='okButton' sx={{borderRadius:3}} onClick={instructClose}>
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
          <audio className="player"  ref="audio_tag" src="Wonderwall.mp3" controls preload="auto|metadata|none" />
        </Box>
      </div>
    );
  }
}


export default ChordRec;

