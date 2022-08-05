import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userData = {
	email: "someone@email.com",
	username: "Aqib",
	password: "******",
};

// * signup
export const signupUser = createAsyncThunk("user/signupUser", async () => {
	const res = await axios.post(
		"https://jsonplaceholder.typicode.com/posts",
		userData
	);
	return res.data;
});

// * login
// export const loginUser = createAsyncThunk("user/loginUser", async () => {
// 	const res = await axios.post(url, loginInfo, options);
// 	return res.data;
// });

const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
		isPending: false,
		error: null,
	},
	extraReducers: (builder) => {
		builder.addCase(signupUser.pending, (state) => {
			state.isPending = true;
		}),
			builder.addCase(signupUser.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isPending = false;
			}),
			builder.addCase(signupUser.rejected, (state, action) => {
				state.user = [];
				state.error = action.error.message;
			});
		// builder.addCase(loginUser.fulfilled, (state, action) => {
		// 	state.user = action.payload;
		// 	state.isPending = false;
		// });
	},
});

export default userSlice.reducer;
