import React, { useState } from 'react'
import BlogForm from '../../forms/BlogForm'
import BlogList from '../../blogs/BlogList';


const Home = () => {

	const [isModalOpen, setIsModalOpen] = useState(false);


	return (
		<div className="flex flex-col gap-y-2 mx-auto w-full">
			<div className="hero min-h-[150px] mt-1" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">Home</h1>

					</div>
				</div>
			</div>
			{/* <div className="md:hidden"><SearchForm /></div> */}

			<button onClick={() => setIsModalOpen(true)} className="relative inline-flex items-center mx-2 px-12 py-3 overflow-hidden text-lg font-medium text-slate-700 border-2 border-slate-500 rounded-lg hover:text-white group hover:bg-gray-50">
				<span className="absolute left-0 block w-full h-0 transition-all bg-slate-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
				<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-2 d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
				</span>
				<span className="relative">Add Blog</span>
			</button>

			<BlogList />

			{/* {blogList.length ? <BlogList /> : (
				<div className="flex flex-col items-center px-10 pb-10">
					<img src={emptyBlog} alt="" width={300} />
					<h3 className="text-4xl font-semibold text-center text-slate-500">The wall is empty, you can add your own blog.</h3>
				</div>
			)} */}




			{isModalOpen && <BlogForm setIsModalOpen={setIsModalOpen} />}
		</div >
	)
}

export default Home