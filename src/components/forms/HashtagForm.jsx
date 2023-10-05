import React from 'react';
import { useState } from 'react';

const HashtagForm = ({ hashtags, setHashtags }) => {

	const [activeInputIndex, setActiveInputIndex] = useState(null);

	const [isHashtag, setIsHashtag] = useState(false);

	const [currentHashtag, setCurrentHashtag] = useState('');
	const [editedValue, setEditedValue] = useState('');

	const addHashtag = (event) => {
		event.preventDefault()
		if (currentHashtag.trim() !== '') {
			setHashtags([...hashtags, currentHashtag]);
			setCurrentHashtag('');
			setIsHashtag(false);
		}
	};

	const delHashtag = (idx) => {
		setActiveInputIndex(idx);
		const filteredHashtags = hashtags.filter((hashtag, index) => index !== idx);
		setHashtags(filteredHashtags);

	};

	const handleInput = (val, idx) => {
		setEditedValue(val);
	};


	return (
		<div className="my-4">
			<div>
				{isHashtag ? (
					<div className="flex gap-x-2 items-center">
						<input
							type="text"
							placeholder="Add hashtag"
							value={currentHashtag}
							onChange={(e) => setCurrentHashtag(e.target.value)}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
						/>
						<button
							onClick={addHashtag}
							type="button"
							className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
								<path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
							</svg>

						</button>
					</div>
				) :
					(<button
						onClick={() => setIsHashtag(true)}
						type="button"
						className="flex items-center uppercase font-semibold py-2.5 px-5 mr-2 mb-2 text-sm text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
							<path fillRule="evenodd" d="M11.097 1.515a.75.75 0 01.589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 111.47.294L16.665 7.5h3.585a.75.75 0 010 1.5h-3.885l-1.2 6h3.585a.75.75 0 010 1.5h-3.885l-1.08 5.397a.75.75 0 11-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 01-1.47-.294l1.02-5.103H3.75a.75.75 0 110-1.5h3.885l1.2-6H5.25a.75.75 0 010-1.5h3.885l1.08-5.397a.75.75 0 01.882-.588zM10.365 9l-1.2 6h4.47l1.2-6h-4.47z" clipRule="evenodd" />
						</svg>
						AddHashtag
					</button>)}
			</div>
			<div className="flex flex-wrap">
				{hashtags.map((tag, index) => (
					<div key={index} className="">
						{activeInputIndex === index ? (
							<input
								type="text"
								onChange={(e) => handleInput(e.target.value)}
								value={editedValue}
								className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2" />) :
							<div
								onClick={() => delHashtag(index)}
								className="flex justify-between items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2">{`#${tag}`}
							</div>
						}
					</div>
				))}
			</div>
		</div>
	);
}

export default HashtagForm