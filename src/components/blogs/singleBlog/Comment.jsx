import React from 'react'

const Comment = ({ author, text }) => {
	return (
		<div className="flex flex-col">
			<div className="flex justify-between">
				<h3 className="font-semibold ">@{author}</h3>
				<p className="font-light text-sm">01.02.2023</p>
			</div>
			<p>{text}</p>
			<hr />
		</div>
	)
}

export default Comment