import React from 'react'

const Apod = (props) => {
	return (
		<div className="Apod">
			<div className="imgContainer hidden">
				<div className="textDiv">{props.currentItem.explanation}</div>
				<div className="imgDiv"><img src={props.currentItem.url}></img></div>
			</div> 
			<button className="previousButton hidden" onClick={props.nextFn}>
				Get Previous Astronomy Picture Of The Day</button>
		</div>
	)
}

export default Apod
