import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./slices/blogsSlice";
import archiveReducer from "./slices/archiveSlice";
import alertReducer from "./slices/alertSlice";

const store = configureStore({
	reducer: {
		blogs: blogsReducer,
		archive: archiveReducer,
		alert: alertReducer
	}
});

export default store;