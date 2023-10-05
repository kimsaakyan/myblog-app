import React from 'react'
import PopularBlogs from './PopularBlogs'
import TodaysBlogs from './TodaysBlogs'
import { useState } from 'react'

const Overview = () => {

	const [isPopularoRTodayBlogs, setIsPopularoRTodayBlogs] = useState(true);

	return (
		<div className="w-full px-2">
			<div className="hero min-h-[150px] mt-1" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">Overview</h1>

					</div>
				</div>
			</div>
			<div className="flex text-center mt-2 gap-x-1 mx-2">
				<button
					onClick={() => setIsPopularoRTodayBlogs(true)}
					className="rounded-2xl w-1/2 p-4 border-2 hover:bg-gray-100">Latest Posts</button>
				<button
					onClick={() => setIsPopularoRTodayBlogs(false)}
					className="rounded-2xl w-1/2 p-4 border-2 hover:bg-gray-100">Popular Posts</button>
			</div>
			<div className="mt-4 flex justify-center">

				{isPopularoRTodayBlogs ? <TodaysBlogs /> : <PopularBlogs />}
			</div>
		</div>
	)
}

export default Overview