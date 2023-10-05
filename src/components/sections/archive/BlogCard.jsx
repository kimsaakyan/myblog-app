import React from 'react';

const BlogCard = ({ id, title, description, date }) => {
	return (
		<div className="flex flex-wrap justify-between mt-2 p-4 items-center bg-slate-600 text-white bg-gradient-to-b from-gray-700 via-gray-900 to-black">
			<div className="bg-white p-4 text-slate-600 rounded my-2 ">
				<h3 className="font-semibold text-xl">{title}</h3>
				<p className="w-32 truncate">{description}</p>
			</div>
			<div>
				<button className="btn">Read More</button>
			</div>
			{/* <hr></hr> */}
		</div>
	)
}

export default BlogCard