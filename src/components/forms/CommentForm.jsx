import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../../redux/slices/blogsSlice';

const CommentForm = ({ blogID }) => {

	const dispatch = useDispatch();

	const [comment, setComment] = useState({
		author: '',
		text: ''
	});


	const handleInput = (val, prop) => {
		setComment({ ...comment, [prop]: val })
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch(addComment({ blogID, comment }));

		setComment({ ...comment, author: '', text: '' });
	}



	return (
		<div>
			<form>

				<div className="flex flex-col justify-start w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
					<div className="ml-4 mb-1 mt-2">
						<label className="block mb-2 text-sm font-medium text-gray-900">Author: </label>
						<input
							type="text"
							value={comment.author}
							onChange={(e) => { handleInput(e.target.value, 'author') }}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
							placeholder='Please, enter an author name'
						/>
					</div>
					<div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
						<label for="comment" className="sr-only">Your comment</label>
						<textarea
							value={comment.text}
							onChange={(e) => { handleInput(e.target.value, 'text') }}
							id="comment" rows="1" className="w-full px-2 text-sm  text-gray-900 bg-white active:outline-none focus:outline-none" placeholder="Write a comment..." required></textarea>
					</div>
					<div className="flex items-center justify-between px-3 py-2 border-t">
						<button
							onClick={(e) => handleSubmit(e)}
							type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
							Post comment
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default CommentForm