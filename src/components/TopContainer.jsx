import React from 'react'

const TopContainer = (props) => {

	return (
		<div className="TopContainer">
			<button className="bigButton startButton" onClick={props.startFn}>
				Get Some Perspective</button>
			<h1 className="hidden">NASA's Astronomy Picture Of The Day</h1>
			<h2 className="hidden"><i>{`${props.titleInfo.title} (${props.titleInfo.date})`}</i></h2>
			<div className="linkDiv hidden">
				<span><button className="littleButton">Link</button></span>
				<span><button className="littleButton" onClick={props.nextFn}>Previous Day's APOD</button></span>
				<span><button className="littleButton" onClick={props.galleryFn}>View Gallery</button></span>
			</div>
		</div>
	)
}

export default TopContainer
