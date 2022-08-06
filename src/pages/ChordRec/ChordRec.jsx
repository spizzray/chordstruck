import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Typography from '@material-ui/core/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';

//imports for DIALOG/pop up
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//import ICONS
import InfoIcon from '@mui/icons-material/Info';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// Import components
import Player from "./components/Player.js";
import Song from "./components/Song.js";
import Library from "./components/Library.js";
import Nav from "./components/Nav.js"; 
import ChordInfo from "./components/chordinfo.png";
// Import data
import data from "../../data.js";


const ChordRec = () => {
  let navigate = useNavigate();

  // CONSTANTS FOR DIALOGS
  const [open, setOpen] = useState(false);
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
  //END OF CONSTANTS FOR DIALOG

  //PLAYER
  // Ref
	const audioRef = useRef(null);

	// State
	const [songs, setSongs] = useState(data(0));
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [libraryStatus, setLibraryStatus] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});

  // console.log(songs[0])
  // Claire is awesome 

  setInterval(() => {
    setCurrentSong(data(audioRef.current.currentTime)[0])
  }, 500
  )

  // Really Claire is awesome :D 


	// Functions
	const updateTimeHandler = (e) => {
		const currentTime = e.target.currentTime;
		const duration = e.target.duration;
		setSongInfo({ ...songInfo, currentTime, duration });
	};

	const songEndHandler = async () => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		let nextSong = songs[(currentIndex + 1) % songs.length];
		await setCurrentSong(nextSong);

		const newSongs = songs.map((song) => {
			if (song.id === nextSong.id) {
				return {
					...song,
					active: true,
				};
			} else {
				return {
					...song,
					active: false,
				};
			}
		});
		setSongs(newSongs);

		if (isPlaying) {
			audioRef.current.play();
		}
	};
  //PLAYER


  return (
    <div >

      <Fab aria-label="add" className='infoBtn' onClick={instuctClickOpen}>
          <InfoIcon className="add-icon" style={{  fill: "#8f83a5" }}  />
      </Fab>

      <AppContainer libraryStatus={libraryStatus}>
			<Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
			<Song currentSong={currentSong} />
			<Player
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				currentSong={currentSong}
				setCurrentSong={setCurrentSong}
				audioRef={audioRef}
				songInfo={songInfo}
				setSongInfo={setSongInfo}
				songs={songs}
				setSongs={setSongs}
			/>
			<Library
				songs={songs}
				setCurrentSong={setCurrentSong}
				audioRef={audioRef}
				isPlaying={isPlaying}
				setSongs={setSongs}
				libraryStatus={libraryStatus}
			/>
			
			<audio
				onLoadedMetadata={updateTimeHandler}
				onTimeUpdate={updateTimeHandler}
				onEnded={songEndHandler}
				ref={audioRef}
				src={currentSong.audio}
			/>
		</AppContainer>      

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
        <DialogTitle textAlign={'center'} variant="h6" color="#000000" component="div" sx={{ fontWeight: 'bold', pt: '4%', pb:'1%', textTransform: "uppercase" }}>
          INSTRUCTIONS
        </DialogTitle>
        <DialogContent>
          <DialogContentText textAlign={'center'} >
            Play along with the song! Our AI will tell you if you need to adjust your sound. 
          </DialogContentText>
          <Box
            component="img"
            className='centerImage'
            sx={{
              height: 253,
              width: 350,
              alignItems:'center',
              maxHeight: { xs: 233, md: 200 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="Chord diagram info"
            src={ChordInfo}
          />
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
};

const AppContainer = styled.div`
	transition: all 0.5s ease;
	margin-left: ${(p) => (p.libraryStatus ? "20rem" : "0")};
	@media screen and (max-width: 768px) {
		margin-left: 0;
	}
`;


export default ChordRec;

