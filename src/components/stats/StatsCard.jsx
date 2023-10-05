import React from 'react';
import { useSelector } from 'react-redux';


const StatsCard = () => {

	const blogList = useSelector(state => state.blogs.blogList);

	return (
		<div>
			<div className="flex flex-wrap justify-between m-2 p-2 bg-slate-500 rounded-lg items-center">
				<div className="flex justify-center items-center bg-white p-2 rounded-lg">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14">
						<path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
					</svg>
				</div>
				<div className="flex flex-col gap-y-1 text-white p-2">
					<h4 className="font-semibold text-2xl">{blogList.length}</h4>
					<p>Blogs Published</p>
				</div>
			</div>

			<div className="flex flex-wrap justify-between m-2 p-2 bg-slate-500 rounded-lg items-center">
				<div className="flex justify-center items-center bg-white p-2 rounded-lg">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14">
						<path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
						<path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
					</svg>
				</div>
				<div className="flex flex-col gap-y-1 text-white p-2">
					<h4 className="font-semibold text-2xl">+1000</h4>
					<p>New Customers</p>
				</div>
			</div>
		</div>
	)
}

export default StatsCard