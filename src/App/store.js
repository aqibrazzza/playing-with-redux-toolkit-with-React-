import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "../features/user/userSlice";

export const store = configureStore({
	reducer: {
		signup: signupReducer,
	},
});
