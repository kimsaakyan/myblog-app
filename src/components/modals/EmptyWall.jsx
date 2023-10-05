import React from 'react';
import emptyWall from '../../images/empty.jpg'

const EmptyWall = ({text}) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<img src={emptyWall} alt="" width={200}/>
			<p className="text-3xl font-bold text-slate-600">{text}</p>
		</div>
	)
}

export default EmptyWall