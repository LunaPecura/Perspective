import React from 'react'

const TopContainer = (props) => {

	return (
		<div className="TopContainer">
			<button className="startButton" onClick={props.startFn}>
				Get Some Perspective</button>
			<h1 className="hidden">NASA's Astronomy Picture Of The Day</h1>
			<h2><i>{`${props.titleInfo.title} (${props.titleInfo.date})`}</i></h2>
		</div>
	)
}

export default TopContainer
