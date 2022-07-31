import React from "react";
import styled from "styled-components";
import Typography from '@material-ui/core/Typography';

const Song = ({ currentSong }) => {
	return (
		<SongContainer>
			<Img src={currentSong.image} alt={currentSong.name}></Img>
			<Typography>{currentSong.name}, {currentSong.artist}</Typography>
		</SongContainer>
	);
};

const SongContainer = styled.div`
	margin-top: 1vh;
	min-height: 50vh;
	max-height: 60vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Img = styled.img`
	width: 17%;
	border-radius: 10%;
	@media screen and (max-width: 768px) {
		width: 50%;
	}
`;

const H1 = styled.h2`
	padding: 10px 1px 10px 1px;
`;

const H2 = styled.h3`
	font-size: 1rem;
`;

export default Song;
