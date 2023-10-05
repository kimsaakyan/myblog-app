import { createSlice } from "@reduxjs/toolkit";

const archiveSlice = createSlice({
	name: 'archive',
	initialState: {
		archive: []
	},
	reducers: {
		addBlogToArchive(state, action) {
			state.archive.push(action.payload.blog)
		}
	}
});


export const { addBlogToArchive } = archiveSlice.actions;

export default archiveSlice.reducer;