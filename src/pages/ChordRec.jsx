import React from "react";
import Typography from '@material-ui/core/Typography';
import ReactDOM from "react-dom";
import mp3 from "./Wonderwall.mp3";


const ChordRec = () => {
  return (
    <div >
      
      <Typography  variant="h4"  style={{ color:"#000000", fontWeight: 'bold', m: '6% 3% 1% 5%' }} >
         DOES IT WORK?
      </Typography>

      <AudioPlayer />

    </div>
  );
}
class AudioPlayer extends React.Component {
  render() {
    return (
      <div >
        <audio ref="audio_tag" src={mp3} controls />
      </div>
    );
  }
}


export default ChordRec;

