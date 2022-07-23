import React from "react";
import Typography from '@material-ui/core/Typography';
import Box from '@mui/material/Box';
import ReactDOM from "react-dom";
import mp3 from "./Wonderwall.mp3";


const ChordRec = () => {
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

