import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";

import Aminor7 from './assets/Chords/Aminor7.png';
import Amajor from './assets/Chords/Amajor.png';
import Dmajor6 from './assets/Chords/Dmajor6.png';
import Eminor from './assets/Chords/Eminor.png';


export default function ChillHop() {
	// ALL CHORDS IN THE SONG
	let types = ["A:min7", "A:maj", "D:maj6", "E:min" ]
	// LINK CHORDS TO THE CHORD DIAGRAMS
	const chordtype = {
		"A:min7": Aminor7,
		"A:maj": Amajor,
		"D:maj6": Dmajor6,
		"E:min": Eminor,
	}

	const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === chordtype.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            }
        }, 5000)
        
        return () => clearInterval(intervalId);
    }, [])


	const getTime = (time) => {
		let minute = Math.floor(time / 60);
		let second = ("0" + Math.floor(time % 60)).slice(-2);
		return `${minute}:${second}`;
	};

	const period = ({ currentSong, songInfo }) => {
		return (
			getTime(songInfo.currentTime)
		);
	};

	const filter = (e,values) => {
		const MLdata = values.map(e => e[0])
		console.log(values)
		console.log(MLdata)
	}
	
		return [	
			{
				name: "Perfect",
				cover: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
				image: chordtype["E:min", "A:min7"],
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
	(0.0, 7.430385487528345, 'A:min7'),
	(7.430385487528345, 11.377777777777778, 'A:maj'),
	(11.377777777777778, 15.185850340136055, 'D:maj6'),
	(15.185850340136055, 18.808163265306124, 'E:min'),
]


