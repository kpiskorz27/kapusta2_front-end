// src/redux/slices/user/slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Stores user information
  isLoggedIn: false, // Tracks authentication status
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true; // User is logged in when set
    },
    logoutUser: (state) => {
      state.user = null;
      state.isLoggedIn = false; // User is logged out
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
