import React from 'react'

const ListItem = (props) => {
	return (
		<div className="ListItem">
			<img className="littleImg" src={props.item.url} />
			<span>{props.item.title}</span>
		</div>
	)
}

export default ListItem
