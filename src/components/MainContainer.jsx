import React from 'react'
import Apod from './Apod'

const MainContainer = (props) => {


	return (
		<div className="MainContainer" >
			<Apod currentItem={props.currentItem} />
		</div>
	)
}

export default MainContainer
