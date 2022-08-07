import { useEffect, useState } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AudioContext from "./contexts/AudioContext";
import Box from '@mui/material/Box';
import autoCorrelate from "./libs/AutoCorrelate";
import {
  noteFromPitch,
  centsOffFromPitch,
  getDetunePercent,
} from "./libs/Helpers";

import guitarChords from "./guitarChords.jpeg";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//import ICONS
import InfoIcon from '@mui/icons-material/Info';

const audioCtx = AudioContext.getAudioContext();
const analyserNode = AudioContext.getAnalyser();
const buflen = 2048;
var buf = new Float32Array(buflen);

const noteStrings = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

function Tuning() {
  const [source, setSource] = useState(null);
  const [started, setStart] = useState(false);
  const [pitchNote, setPitchNote] = useState("C");
  const [pitchScale, setPitchScale] = useState("4");
  const [pitch, setPitch] = useState("0 Hz");
  const [detune, setDetune] = useState("0");
  const [notification, setNotification] = useState(false);

  const updatePitch = (time) => {
    analyserNode.getFloatTimeDomainData(buf);
    var ac = autoCorrelate(buf, audioCtx.sampleRate);
    if (ac > -1) {
      let note = noteFromPitch(ac);
      let sym = noteStrings[note % 12];
      let scl = Math.floor(note / 12) - 1;
      let dtune = centsOffFromPitch(ac, note);
      setPitch(parseFloat(ac).toFixed(2) + " Hz");
      setPitchNote(sym);
      setPitchScale(scl);
      setDetune(dtune);
      setNotification(false);
      console.log(note, sym, scl, dtune, ac);
    }
  };
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (source != null) {
      source.connect(analyserNode);
    }
  }, [source]);

  setInterval(updatePitch, 1);

  const start = async () => {
    const input = await getMicInput();

    if (audioCtx.state === "suspended") {
      await audioCtx.resume();
    }
    setStart(true);
    setNotification(true);
    setTimeout(() => setNotification(false), 5000);
    setSource(audioCtx.createMediaStreamSource(input));
  };

  const stop = () => {
    source.disconnect(analyserNode);
    setStart(false);
  };

  const getMicInput = () => {
    return navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        autoGainControl: false,
        noiseSuppression: false,
        latency: 0,
      },
    });
  };

  return (
    <div >
       <Fab aria-label="add" className='infoBtn' onClick={handleClickOpen}>
          <InfoIcon className="add-icon" style={{  fill: "#8f83a5" }}  />
      </Fab>
      
      <Container className="container">
      <div className="ordinaryTitle">
        <div
          className={
            started
              ? "visible flex flex-col transition-all ease-in delay-75 bg-gray-200 justify-center items-center p-10 rounded-xl shadow-lg mb-5 w-60 h-60"
              : "invisible transition-all w-0 h-0"
          }
        >
          <div className="flex items-start font-mono">
            <Container className="chordTitle">
              <Typography style={{fontSize:70}}
                className={
                  started
                    ? "chordTitle"
                    : "invisible text-xs"
                }
              >
                {pitchNote}
              </Typography>
              <span className="bg-green-600 p-1 px-2 text-white rounded-lg" style={{fontSize:30}}>
                {pitchScale}
              </span>
              <div className="w-full flex justify-center items-center">
              <div 
                className="bg-gradient-to-r to-black-400 from-red-600 py-1 rounded-full rotate-180"
                style={{
                  width: (detune < 0 ? getDetunePercent(detune) : "50") + "%",
                }}
              ></div>
              <span className="font-bold text-lg text-green-800">I</span>
              <div
                className="bg-gradient-to-r from-green-400 to-red-600 py-1 rounded-full"
                style={{
                  width: (detune > 0 ? getDetunePercent(detune) : "50") + "%",
                }}
              ></div>
            </div>
            <div className="mt-2 text-xs text-gray-400">
              <span>{pitch}</span>
            </div>
            </Container>
          </div>

          
          
        </div>
        {!started ? (
          <Button
            className="startBtn" onClick={start} > Start
         </Button>
        ) : (
          <Button
            className="startBtn"
            onClick={stop}
          >
            Stop
          </Button>
        )}
      </div>
      </Container>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          maxWidth: 'xs',
          '& .MuiDialog-paper': { borderRadius: 3, width: '40%', maxHeight: 435 }
        }}>
        <DialogTitle textAlign={'center'} variant="h6" color="#000000" component="div" sx={{ fontWeight: 'bold', pt: '4%', pb:'2%', textTransform: "uppercase" }}>
          GUITAR STRINGS
        </DialogTitle>
        <DialogContent>
          <Box
            component="img"
            className='centerImage'
            sx={{
              height: 250,
              width: 350,
              alignItems:'center',
              maxHeight: { xs: 233, md: 200 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="Guitar Chords info"
            src={guitarChords}
          />
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

export default Tuning;
