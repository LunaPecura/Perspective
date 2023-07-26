import './App.css';
import './components/MainContainer'
import { useState } from 'react';
import { useEffect } from 'react';
import MainContainer from './components/MainContainer';
import dateMinusOne from './helper functions/dateMinusOne'
import TopContainer from './components/TopContainer';
import BottomContainer from './components/BottomContainer';

function App() {

	const apiKey = 'LzgRZhjbLiFQT87zeQBoVpJOa3hl1Rk9U4mnRXza'
	const [currentItem, setCurrentItem] = useState([])
	
	const getInitialItem = async () => {
		const response = await fetch(
			`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
		const data = await response.json();
		setCurrentItem(data);
	}

	const getNextItem = async () => {
		const newDate = dateMinusOne(currentItem.date);
		const response = await fetch(
			`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${newDate}`);
		const data = await response.json();
		setCurrentItem(data);
		window.scrollTo(0, 0);
	}

	const todaysApod = () => {
		getInitialItem();
		document.querySelector(".imgContainer").classList.remove("hidden");
		document.querySelector("h1").classList.remove("hidden");
		document.querySelector(".startButton").classList.add("hidden");
		document.querySelector(".previousButton").classList.remove("hidden")
		document.querySelector("h2").classList.remove("hidden")
		document.querySelector(".linkDiv").classList.remove("hidden");
	}

	const viewGallery = () => {
		document.querySelector(".Apod").classList.add("hidden");
		document.querySelector(".Gallery").classList.remove("hidden");
		document.querySelector(".previousButton").classList.add("hidden");
		document.querySelector("h2").classList.add("hidden");
	}

	const titleInfo = {
		title: currentItem.title,
		date: currentItem.date
	}



	return (
		<div className="App">
			<TopContainer startFn={todaysApod} galleryFn={viewGallery} titleInfo={titleInfo} />
			<MainContainer currentItem={currentItem} />
			<BottomContainer nextFn={getNextItem} />
		</div>
	);
}

export default App;
