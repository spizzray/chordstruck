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

import mp3 from "./Wonderwall.mp3";


const ChordRec = () => {
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

      <Box className='playerBox'>
        <AudioPlayer />
      </Box>

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

    </div>
  );
}
class AudioPlayer extends React.Component {
  render() {
    return (
      <div >
        <Box marginTop='30%' >
          <audio className="player"  ref="audio_tag" src={mp3} controls  />
        </Box>
      </div>
    );
  }
}


export default ChordRec;

