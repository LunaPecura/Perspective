import React from 'react'
import ListItem from './ListItem';

const Gallery = (props) => {

	const list = props.currentList.filter(item => item.media_type === "image").map((item, index) => {
		return <ListItem item={item} key={index} /> });

	return (
		<div className="Gallery">
			{list}
		</div>
	)
}

export default Gallery
