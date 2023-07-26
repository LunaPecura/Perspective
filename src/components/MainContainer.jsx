import React from 'react'
import Apod from './Apod'

const MainContainer = (props) => {


	return (
		<div className="MainContainer" >
			<Apod startFn={props.startFn} nextFn={props.nextFn} currentItem={props.currentItem} />
		</div>
	)
}

export default MainContainer
