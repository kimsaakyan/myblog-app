import { useSelector, useDispatch } from 'react-redux';
import { deleteBlog } from '../../redux/slices/blogsSlice';
import { addBlogToArchive } from '../../redux/slices/archiveSlice';
import { showAlert } from '../../redux/slices/alertSlice';

const DeleteConfirmationModal = ({ setIsModalOpen, blogID }) => {
	const dispatch = useDispatch();
	const blogList = useSelector(state => state.blogs.blogList);

	console.log(showAlert)

	const handleClick = (blogID, action) => {
		switch (action) {
			case 'delete': {
				dispatch(deleteBlog({ blogID }));
				break;
			}
			case 'archive': {
				const blog = blogList.find(blog => blog.id === blogID)
				dispatch(showAlert({ idx: true }))

				setTimeout(() => {
					dispatch(showAlert({ idx: false }))
				}, 2000);


				dispatch(addBlogToArchive({ blog }));
				dispatch(deleteBlog({ blogID }));

			}
		}
	}





	return (
		<div className="fixed top-0 left-0 w-[100%] h-[100%] bg-black/50 z-40 flex justify-center align-center">
			<div className="flex flex-col fixed bg-white p-4 rounded-xl top-[15%] gap-y-6 sm:w-[500px]">
				<div className="flex justify-between items-center">
					<h4 className="text-m font-semibold text-red-500">Delete Confirmation</h4>
					<button onClick={() => setIsModalOpen(false)}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
							<path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
						</svg>
					</button>
				</div>

				<div className="flex flex-col text-center font-semibold">
					<p>Are you sure you want to delete this post? </p>
					<p>(You have the option to archive it.)</p>
				</div>

				<div className="flex justify-between items-center">
					<div className="flex gap-x-2">
						<button
							onClick={() => handleClick(blogID, 'delete')}
							className="btn bg-gray-500 hover:bg-red-500 text-white">Delete</button>
						<button
							onClick={() => handleClick(blogID, 'archive')}
							className="btn bg-gray-500 hover:bg-green-500 text-white">Archive</button>
					</div>
					<button onClick={() => setIsModalOpen(false)} className="btn">Cancel</button>
				</div>
			</div>

		</div>
	)
}

export default DeleteConfirmationModal