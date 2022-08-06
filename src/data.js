import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";

import Aminor7 from './assets/Chords/Aminor7.png';
import Amajor from './assets/Chords/Amajor.png';
import Dmajor6 from './assets/Chords/Dmajor6.png';
import Eminor from './assets/Chords/Eminor.png';
import Cmajor from './assets/Chords/C-major.png';


export default function ChillHop(time) {
	// ALL CHORDS IN THE SONG
	let types = ['Ab:maj', 'F:min', 'Db:maj', 'Eb:maj', 'C:min' ]
	// LINK CHORDS TO THE CHORD DIAGRAMS
	const chordType = {
		'Ab:maj': Aminor7,
		'F:min': Amajor,
		'Db:maj': Dmajor6,
		'Eb:maj': Eminor,
		'C:min': Cmajor, //temporary until i find the correct chord diagram
	}

	// const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         if(currentIndex === chordtype.length - 1) {
    //             setCurrentIndex(0);
    //         } 
    //         else {
    //              setCurrentIndex(currentIndex + 1);
    //         }
    //     }, 5000)
        
    //     return () => clearInterval(intervalId);
    // }, [])


	// const getTime = (time) => {
	// 	let minute = Math.floor(time / 60);
	// 	let second = ("0" + Math.floor(time % 60)).slice(-2);
	// 	return `${minute}.${second}`;
	// };

	// const period = ({ currentSong, songInfo }) => {
	// 	return (
	// 		getTime(songInfo.currentTime)
	// 	);
	// };

	// let len = MLdata.length
	// const display = MLdata.map((start, end, chord) => {
	// 	for (let n=0; n<len(MLdata); n++) {
	// 		if (start <= getTime) {
	// 			return (
	// 				MLdata[n].chord
	// 			); 
	// 		};
	// 	console.log(n)	
	// 	};	
	// })
	let currentChord = ""
	for (let n=0; n<MLdata.length; n++) {
		if (MLdata[n][0] <= time) {
			currentChord = MLdata[n][2]
		};
	}
	// console.log(currentChord)
	

	return [	
		{
			name: "Perfect",
			cover: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			image: chordType[currentChord],
			artist: "Ed Sheeran",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: true,
		},
		{
			name: "Daylight",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			artist: "Aiguille",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Keep Going",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
			artist: "Swørn",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Nightfall",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			artist: "Aiguille",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Reflection",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
			artist: "Swørn",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Under the City Stars",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
			artist: "Aso, Middle School, Aviino",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: false,
		},
		//ADD MORE HERE
	];
	
}


const MLdata = [
	[0.0, 7.430385487528345, 'Ab:maj'],
	[7.430385487528345, 11.377777777777778, 'F:min'],
	[11.377777777777778, 15.185850340136055, 'Db:maj'],
	[15.185850340136055, 18.808163265306124, 'Eb:maj'],
	[18.808163265306124, 22.569795918367348, 'Ab:maj'],
	[22.569795918367348, 26.610068027210886, 'F:min'],
	[26.610068027210886, 29.72154195011338, 'Db:maj'],
	[29.72154195011338, 30.65034013605442, 'Ab:maj'],
	[30.65034013605442, 33.90113378684807, 'Eb:maj'],
	[33.90113378684807, 37.802086167800454, 'Ab:maj'],
	[37.802086167800454, 41.61015873015873, 'F:min'],
	[41.61015873015873, 45.55755102040816, 'Db:maj'],
	[45.55755102040816, 47.55446712018141, 'Ab:maj'],
	[47.55446712018141, 49.13342403628118, 'Eb:maj'],
	[49.13342403628118, 53.03437641723356, 'Ab:maj'],
	[53.03437641723356, 56.70312925170068, 'F:min'],
	[56.70312925170068, 60.46476190476191, 'Db:maj'],
	[60.46476190476191, 61.06848072562359, 'Eb:min'],
	[61.06848072562359, 63.25115646258504, 'Eb:maj'],
	[63.25115646258504, 64.22639455782313, 'C:min'],
	[64.22639455782313, 66.22331065759637, 'F:min'],
	[66.22331065759637, 68.26666666666667, 'Db:maj'],
	[68.26666666666667, 70.0778231292517, 'Ab:maj'],
]

