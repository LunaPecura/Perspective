import React from 'react'

const BottomContainer = (props) => {


	return (
		<div className="BottomContainer">
			<button className="previousButton hidden" onClick={props.nextFn}>
				Get Previous Astronomy Picture Of The Day</button>
		</div>
	)
}

export default BottomContainer
