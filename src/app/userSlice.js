import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
    login: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { logout, login } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
