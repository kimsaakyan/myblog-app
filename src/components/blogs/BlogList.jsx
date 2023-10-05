import React from 'react';
import Blog from './Blog';
import { useSelector } from 'react-redux';

const BlogList = () => {

	const blogs = useSelector(state => state.blogs.blogList);


	return (
		<div className="flex flex-col gap-y-8 p-4">
			{blogs.map(blog => <Blog key={blog.id} {...blog} />)}
		</div>
	)
}

export default BlogList