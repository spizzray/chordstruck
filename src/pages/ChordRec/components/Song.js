import React from "react";
import styled from "styled-components";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


const Song = ({ currentSong }) => {
	const arrayImage=[ currentSong.image, currentSong.imageN ]
		return (
			<SongContainer>
				<Grid container style={{justifyContent:'center', columnGap:90, paddingBottom:10}} >
					<Typography  className="space">Current</Typography>	
					<Typography  className="space"> Next </Typography>
				</Grid> 
				<ImageList sx={{ width: 320, height:215, overflow:"hidden"}} cols={2} gap={17}  rowHeight={"auto"}>
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
	margin-top: -10px;
	max-height: 800px;
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
