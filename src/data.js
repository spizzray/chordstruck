import { v4 as uuidv4 } from "uuid";

import Aminor7 from './assets/Chords/Aminor7.png';
import Amajor from './assets/Chords/Amajor.png';
import Dmajor6 from './assets/Chords/Dmajor6.png';
import Eminor from './assets/Chords/Eminor.png';
import Cmajor from './assets/Chords/C-major.png';

import Perfect from './assets/Songs/Perfect.mp3';



export default function ChillHop(time) {

	// LINK CHORDS TO THE CHORD DIAGRAMS
	const chordType = {
		'Ab:maj': Aminor7,
		'F:min': Amajor,
		'Db:maj': Dmajor6,
		'Eb:maj': Eminor,
		'C:min': Cmajor, //temporary until i find the correct chord diagram
	}

	let currentChord = MLdata[0][2]
	let nextChord = ""
	// let pastChord = ""
	for (let n=0; n<MLdata.length; n++) {
		if (MLdata[n][0] <= time) {
			currentChord = MLdata[n][2]
			nextChord = MLdata[n+1][2]
			// pastChord = MLdata[n-1][2]
		};
	}
	// console.log(nextChord)
	

	return [	
		{
			name: "Perfect",
			cover: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			image: chordType[currentChord],
			imageN: chordType[nextChord],
			artist: "Ed Sheeran",
			audio: Perfect,
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: true,
		},
		// {
		// 	name: "Daylight",
		// 	cover:
		// 		"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
		// 	artist: "Aiguille",
		// 	audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
		// 	color: ["#EF8EA9", "#ab417f"],
		// 	id: uuidv4(),
		// 	active: false,
		// },
		
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

