import React from 'react';
import { useSelector } from 'react-redux';
import EmptyWall from '../../modals/EmptyWall';
import Blog from '../../blogs/Blog';

const TodaysBlogs = () => {
	const blogList = useSelector(state => state.blogs.blogList);


	const currentDate = new Date();
	const todaysBlog = blogList.filter(blog => blog.date === `${currentDate.getFullYear()}.${currentDate.getMonth() + 1}.${currentDate.getDate()}`);


	if (todaysBlog.length === 0) {
		return <EmptyWall text={"No today's blogs on the wall."}/>
	}

	return (
		<div className='w-full p-4'>
			{todaysBlog.map(blog => <div key={blog.id} className="m-4"><Blog {...blog} /></div>)}
		</div>
	)
}

export default TodaysBlogs