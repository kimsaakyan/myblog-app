import React from 'react';
import { useSelector } from 'react-redux';
import BlogCard from './BlogCard';
import EmptyWall from '../../modals/EmptyWall';


const ArchiveBlogs = () => {


	const archive = useSelector(state => state.archive.archive);


	if (archive.length === 0) {
		return <EmptyWall text={"The archive is empty."} />
	}

	return (
		<div>
			{archive.map(blog => <BlogCard key={blog.id} {...blog} />)}
		</div>
	)
}

export default ArchiveBlogs