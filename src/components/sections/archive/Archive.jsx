import React from 'react'
import ArchiveBlogs from './ArchiveBlogs'

const Archive = () => {
	return (
		<div className="px-2 mt-1">
			<div className="hero min-h-[150px]" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">Archive</h1>

					</div>
				</div>
			</div>
			<ArchiveBlogs />
		</div>
	)
}

export default Archive