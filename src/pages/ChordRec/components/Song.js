import React from "react";
import styled from "styled-components";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const Song = ({ currentSong }) => {
	const arrayImage=[ currentSong.image, currentSong.imageN ]
		return (
			<SongContainer>
				<Typography sx={{ letterSpacing: 10 }}> CURRENT    |     NEXT </Typography>
				<ImageList sx={{ paddingLeft: 18, width: 500, height: 550 }} cols={3} gap={17}  rowHeight={164}>
				{arrayImage.map((image) => (
				<ImageListItem >
					<img
					src={image} 
					alt={currentSong.name}
					loading="lazy"
					/>
				</ImageListItem>
				))}
				</ImageList>
				
				<Typography>{currentSong.name}, {currentSong.artist}</Typography>
			</SongContainer>
		)
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

// const Img = styled.img`
// 	width: 17%;
// 	display: flex;
// 	flex-direction: row;
// 	border-radius: 10%;
// 	@media screen and (max-width: 768px) {
// 		width: 100%;
// 	}
// `;


export default Song;
