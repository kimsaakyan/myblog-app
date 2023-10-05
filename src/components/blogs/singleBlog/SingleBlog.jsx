import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BlogComment from '../BlogComment';

const SingleBlog = () => {
	const currURL = useParams();
	const blogList = useSelector(state => state.blogs.blogList);

	const [blog, setBlog] = useState(null);

	useEffect(() => {
		// Поиск блога только если currURL.id определен
		if (currURL.id) {
			const foundBlog = blogList.find(blog => blog.id === currURL.id);
			setBlog(foundBlog);
		}
	}, [currURL.id, blogList]);

	return (
		<div className="p-4">{<BlogComment {...blog} />}</div>
	);
}

export default SingleBlog;
