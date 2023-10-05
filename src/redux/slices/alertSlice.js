import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
	name: 'alert',
	initialState: {
		successfullyAddedToArchive: false
	},
	reducers: {
		showAlert(state, action) {
			const { idx } = action.payload;
			state.successfullyAddedToArchive = idx;

		}
	}
});

export const { showAlert } = alertSlice.actions;

export default alertSlice.reducer;