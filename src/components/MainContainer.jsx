import React from 'react'
import Apod from './Apod'
import Gallery from './Gallery'

const MainContainer = (props) => {


	return (
		<div className="MainContainer" >
			<Apod currentItem={props.currentItem} />	{/* initially shown */}
			<Gallery />									{/* initially hidden */}					
		</div>
	)
}

export default MainContainer
