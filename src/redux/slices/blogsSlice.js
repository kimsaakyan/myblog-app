import { createSlice } from "@reduxjs/toolkit";
import { generateUUID } from "../../tools/uuidGenerator";

const blogList = [
	{
		author: 'Mark Mc',
		id: generateUUID(),
		title: 'Lorem ipsum dolor sit amet 1',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam possimus repellat incidunt odit eligendi mollitia quaerat autem nobis fugiat natus?',
		hashtags: ['js', 'react', 'app'],
		comments: [],
		date: '2023.10.3',
		like: 0,
		editable: false
	},
	{
		author: 'Oxana Win',
		id: generateUUID(),
		title: 'Lorem ipsum dolor sit amet 2',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam possimus repellat incidunt odit eligendi mollitia quaerat autem nobis fugiat natus?',
		hashtags: ['world', 'animal'],
		comments: [],
		date: '1.6.2022',
		like: 0,
		editable: false
	},
	{
		author: 'Alex Johnson',
		id: generateUUID(),
		title: 'Lorem ipsum dolor sit amet 3',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam possimus repellat incidunt odit eligendi mollitia quaerat autem nobis fugiat natus?',
		hashtags: [],
		comments: [],
		date: '03.10.2023',
		like: 0,
		editable: false
	},
];

const blogsSlice = createSlice({
	name: 'blogs',
	initialState: {
		blogList: [...blogList],
		searchItem: '',

	},
	reducers: {
		addBlog(state, action) {
			state.blogList.unshift(action.payload);
		},
		deleteBlog(state, action) {
			state.blogList = state.blogList.filter(blog => blog.id !== action.payload.blogID)
		},
		editBlog(state, action) {
			state.blogList = state.blogList.map((blog) => {
				if (blog.id === action.payload.blogID) {
					return { ...blog, description: action.payload.newDescription }
				}
				return { ...blog };
			})
		},
		incrementLikes(state, action) {
			state.blogList = state.blogList.map((blog) => {
				if (blog.id === action.payload.blogID) {
					return { ...blog, like: blog.like + 1 }
				}
				return { ...blog };
			})
		},
		decrementLikes(state, action) {
			state.blogList = state.blogList.map((blog) => {
				if (blog.id === action.payload.blogID) {
					return { ...blog, like: blog.like - 1 }
				}
				return { ...blog };
			})
		},
		addComment(state, action) {
			const { blogID, comment } = action.payload;
			state.blogList = state.blogList.map((blog) => {
				if (blog.id === blogID) {
					return { ...blog, comments: [...blog.comments, comment] }
				}
				return { ...blog }
			})

		},

		searchByHashtags(state, action) {
			const { searchText } = action.payload;
			
			if (searchText.trim() === "") {
				state.blogList = [...blogList];
			} else {

				state.blogList = blogList.filter(blog =>
					blog.hashtags.some(hashtag =>
						hashtag.includes(searchText)
					)
				);
			}
		}







	}
})

export const { addBlog, deleteBlog, editBlog, incrementLikes, decrementLikes, addComment, searchByHashtags } = blogsSlice.actions;

export default blogsSlice.reducer;