import React from 'react';
import { useSelector } from 'react-redux';
import Blog from '../../blogs/Blog';

const PopularBlogs = () => {
	const blogList = useSelector(state => state.blogs.blogList);
	const popularBlogList = [...blogList].sort((a, b) => b.like - a.like);


	return (
		<div className="">
			{popularBlogList.map(blog => <div className="m-4"><Blog key={blog.id} {...blog} /></div>)}
		</div>
	)
}

export default PopularBlogs