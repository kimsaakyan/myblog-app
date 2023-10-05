import React from 'react'
import { useSelector } from 'react-redux'
import Comment from './Comment'

const CommentsContainer = ({ comments }) => {




	return (
		<div className="flex flex-col gap-y-4 bg-white border p-2 overflow-y-auto max-h-[200px] rounded-lg">
			{comments?.map(comment => <Comment {...comment} />)}
			
		</div>
	)
}

export default CommentsContainer