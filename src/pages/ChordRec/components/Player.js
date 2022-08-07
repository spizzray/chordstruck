import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReactCountdownClock from "react-countdown-clock"

import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@material-ui/core/Typography';

//imports for DIALOG/pop up
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//Icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import { padding } from "@mui/system";

// style
const pointer = { cursor: "pointer" };

const Player = ({
	currentSong,
	setCurrentSong,
	isPlaying,
	setIsPlaying,
	audioRef,
	songInfo,
	setSongInfo,
	songs,
	setSongs,
}) => {
	// Event handlers
	const playSongHandler = () => {
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		} else {
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		}
	};

	const togglePlayPauseIcon = () => {
		if (isPlaying) {
			return <PauseRoundedIcon/>;
		} else {
			return <PlayArrowRoundedIcon/>;
		}
	};

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

	const getTime = (time) => {
		let minute = Math.floor(time / 60);
		let second = ("0" + Math.floor(time % 60)).slice(-2);
		return `${minute}:${second}`;
	};

	const dragHandler = (e) => {
		audioRef.current.currentTime = e.target.value;
		setSongInfo({ ...songInfo, currentTime: e.target.value });
	};

    const setSpeed = (speed) => {
        audioRef.current.playbackRate = speed;
      };

	const skipTrackHandler = async (direction) => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		if (direction === "skip-forward") {
			await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
			activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
		} else if (direction === "skip-back") {
			if ((currentIndex - 1) % songs.length === -1) {
				await setCurrentSong(songs[songs.length - 1]);
				activeLibraryHandler(songs[songs.length - 1]);
			} else {
				await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
				activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
			}
		}
		if (isPlaying) {
			audioRef.current.play();
		}
	};

	const activeLibraryHandler = (newSong) => {
		const newSongs = songs.map((song) => {
			if (song.id === newSong.id) {
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
	};

	//PAIN POP UP
	let navigate = useNavigate();
	const [openpain, setOpen] = useState(false);
	const painClickOpen = () => {
		setOpen(true);
	};
	const painClose = () => {
		setOpen(false);
	};


	return (
		<PlayerContainer>
			<TimeControlContainer>
				<P>{getTime(songInfo.currentTime || 0)}</P>
				<Track currentSong={currentSong}>
					<Input
						onChange={dragHandler}
						min={0}
						max={songInfo.duration || 0}
						value={songInfo.currentTime}
						type="range"
					/>
					<AnimateTrack songInfo={songInfo}></AnimateTrack>
				</Track>

				<P>{getTime(songInfo.duration || 0)}</P>
			</TimeControlContainer>

			<PlayControlContainer>
			<box onClick={playSongHandler}>
				<Button 
					className = 'speedBtn'
					onClick={painClickOpen}
				>
					Pain
				</Button>
			</box>

				<SkipPreviousRoundedIcon
					onClick={() => skipTrackHandler("skip-back")}
					className="skip-back"
					fontSize="large"
					style={pointer}
				/>

				<Fab
					onClick={playSongHandler}
					className="play"
					fontSize="large"
                    sx={{color:"#ffffff",backgroundColor:"#8f83a5"}}
					style={pointer}
                    >
                    {togglePlayPauseIcon()}

                </Fab>
				
				<SkipNextRoundedIcon
					onClick={() => skipTrackHandler("skip-forward")}
					className="skip-forward"
					fontSize="large"
					style={pointer}
				/>
                    
            
            {/* SPEED DROPDOWN */}
            <Button 
                className = 'speedBtn'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Speed
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <box onClick={handleClose} >
                <MenuItem onClick={() => setSpeed(0.25)}>0.25x</MenuItem>
                <MenuItem onClick={() => setSpeed(0.5)}>0.5x</MenuItem>
                <MenuItem onClick={() => setSpeed(0.75)}>0.75x</MenuItem>
                <MenuItem onClick={() => setSpeed(1)}>1x</MenuItem>
                </box>
            </Menu>
            </PlayControlContainer>

			{/* POPUP START */}
			<Dialog
				open={openpain}
				onClose={painClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				sx={{
				maxWidth: 'xs',
				'& .MuiDialog-paper': { borderRadius: 3, width: '50%', maxHeight: 435 }
				}}>
				<DialogActions>
				<Button variant="text" size="small" textalign='left' sx={{ paddingRight: '80%' }} onClick={painClose}>
					<CloseRoundedIcon sx={{ color: "#000000" }} />
					<Typography className='backBtn' variant="button" fontSize='15' fontWeight='900' >
					Close
					</Typography>
				</Button>
				</DialogActions>
				<DialogTitle textAlign={'center'} variant="h5" color="#000000" component="div" sx={{ fontWeight: 'bold', pt: '0.1%', fontWeight: "bold" }}>
				No pressure
				</DialogTitle>
				<DialogContent >
				<DialogContentText textAlign={'center'} >
					Take a short break to rest your fingers
				</DialogContentText>
				</DialogContent>

				<DialogActions sx={{ justifyContent :'center', pb: '4%'}} >
				<ReactCountdownClock seconds={15}
						color="#8f83a5"
						alpha={0.9}
						size={130}
						onComplete={painClose} />
				</DialogActions>
			</Dialog>
			{/* POP UP END */}

		</PlayerContainer>
		
	);
};

const PlayerContainer = styled.div`
	min-height: 15vh;
    margin-top: -5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const TimeControlContainer = styled.div`
	margin-top: 2vh;
	width: 60%;
	display: flex;
	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

const Track = styled.div`
	background: #8f83a5;
	width: 100%;
	height: 0.9rem;
	position: relative;
	border-radius: 1rem;
	overflow: hidden;
	background: linear-gradient(to right, #79708b, #d3c2f4);
`;

const AnimateTrack = styled.div`
	background: rgb(204, 204, 204);
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	transform: translateX(${(p) => Math.round((p.songInfo.currentTime * 100) / p.songInfo.duration) + "%"});
	pointer-events: none;
`;

const Input = styled.input`
	width: 100%;
	-webkit-appearance: none;
	background: transparent;
	cursor: pointer;
	/* padding-top: 1rem;
	padding-bottom: 1rem; */
	&:focus {
		outline: none;
		-webkit-appearance: none;
	}
	@media screen and (max-width: 768px) {
		&::-webkit-slider-thumb {
			height: 48px;
			width: 48px;
		}
	}
	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		height: 16px;
		width: 16px;
		background: transparent;
		border: none;
	}
	&::-moz-range-thumb {
		-webkit-appearance: none;
		background: transparent;
		border: none;
	}
	&::-ms-thumb {
		-webkit-appearance: none;
		background: transparent;
		border: none;
	}
	&::-moz-range-thumb {
		-webkit-appearance: none;
		background: transparent;
		border: none;
	}
`;

const P = styled.p`
	padding: 0 1rem 0 1rem;
	user-select: none;
`;

const PlayControlContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 6px 1rem 1rem 1rem;
	width: 50%;
	@media screen and (max-width: 768px) {
		width: 60%;
	}
`;

export default Player;
