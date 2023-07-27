import './App.css';
import './components/MainContainer'
import { useState, useEffect } from 'react';
import MainContainer from './components/MainContainer';
import TopContainer from './components/TopContainer';
import BottomContainer from './components/BottomContainer';
import dateMinusOne from './helper functions/dateMinusOne'

function App() {

	const apiKey = 'LzgRZhjbLiFQT87zeQBoVpJOa3hl1Rk9U4mnRXza'
	const [currentItem, setCurrentItem] = useState([])
	const [currentList, setCurrentList] = useState([[]])
	const [todaysDate, setTodaysDate] = useState("")
	
	useEffect(() => {
		getInitialItem();
	}, [])

	const getInitialItem = async () => {
		const response = await fetch(
			`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
		const data = await response.json();
		setCurrentItem(data);
		setTodaysDate(data.date);
	}

	const getNextItem = async () => {
		const newDate = dateMinusOne(currentItem.date);
		const response = await fetch(
			`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${newDate}`
		);
		setCurrentItem(await response.json());
		window.scrollTo(0, 0);
	}

	const getRandomList = async () => {
		console.log("right before fetch")
		const res = await fetch(
			`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=100`
		);
		const data = await res.json();
		setCurrentList(data);
		console.log("right before logging data")
		console.log(data.filter(item => item.media_type === "image"));
	}

	const todaysApod = () => {
		getInitialItem();
		document.querySelector(".imgContainer").classList.remove("hidden");
		document.querySelector("h1").classList.remove("hidden");
		document.querySelector(".startButton").classList.add("hidden");
		document.querySelector(".previousButton").classList.remove("hidden")
		document.querySelector("h2").classList.remove("hidden")
		document.querySelector(".linkDiv").classList.remove("hidden");
		document.querySelector(".Gallery").classList.add("hidden");
		document.querySelector(".Apod").classList.remove("hidden");
		document.querySelector(".littleButton.todaysApod").setAttribute('disabled', true)
		document.querySelector(".littleButton.previousApod").removeAttribute('disabled')
	}

	const previousApod = () => {
		getNextItem();
		document.querySelector(".littleButton.todaysApod").removeAttribute('disabled');
	}

	const viewGallery = () => {
		getRandomList();
		document.querySelector(".Apod").classList.add("hidden");
		document.querySelector(".Gallery").classList.remove("hidden");
		document.querySelector(".previousButton").classList.add("hidden");
		document.querySelector("h2").classList.add("hidden");
		document.querySelector(".littleButton.todaysApod").removeAttribute('disabled');
		document.querySelector(".littleButton.previousApod").setAttribute('disabled', true)


	}

	const titleInfo = {
		title: currentItem.title,
		date: currentItem.date
	}



	return (
		<div className="App">
			<TopContainer startFn={todaysApod} nextFn={previousApod} galleryFn={viewGallery} titleInfo={titleInfo} />
			<MainContainer currentItem={currentItem} currentList={currentList}/>
			<BottomContainer nextFn={previousApod} />
		</div>
	);
}

export default App;
