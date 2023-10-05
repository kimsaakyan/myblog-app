import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBlog } from '../../redux/slices/blogsSlice';
import { useState } from 'react';
import HashtagForm from './HashtagForm';
import { generateUUID } from '../../tools/uuidGenerator';

const BlogForm = ({ setIsModalOpen }) => {

	const dispatch = useDispatch();

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const [hashtags, setHashtags] = useState([]);

	const handleSubmit = (e, idx) => {
		e.preventDefault();

		switch (idx) {
			case 'title': {
				setTitle(e.target.value);
				break;
			}
			case 'content': {
				setContent(e.target.value);
				break;
			}
			case 'submit': {
				const newBlog = {
					author: 'Anonim',
					id: generateUUID(),
					title,
					description: content,
					hashtags,
					comments: [],
					date: `${new Date().getFullYear()}.${new Date().getMonth() + 1}.${new Date().getDate()}`,
					like: 0
				};
				dispatch(addBlog(newBlog));
				setIsModalOpen(false);
			}
		}

	}


	return (
		<div className="fixed top-0 left-0 w-[100%] h-[100%] bg-black/50 z-50 flex justify-center align-center">
			<div className="w-[300px] l:w-[400px]  md:w-[600px] fixed bg-white p-4 rounded-xl top-[5%]">
				<form action="">
					<div className="mb-6">
						<label for="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog title</label>
						<input
							type="text"
							value={title}
							onChange={(e) => { handleSubmit(e, 'title') }}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder='Please, enter a title'
						/>
					</div>

					<div>
						<label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
						<textarea
							value={content}
							onChange={(e) => { handleSubmit(e, 'content') }}
							rows="4"
							break-all
							className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
					</div>

					<HashtagForm hashtags={hashtags} setHashtags={setHashtags} />

					<div className="mt-4">
						<button
							onClick={(e) => handleSubmit(e, 'submit')}
							type="submit"
							className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
								<path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
							</svg>
						</button>

						<button
							onClick={() => setIsModalOpen(false)}
							type="button"
							className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
								<path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
							</svg>
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default BlogForm