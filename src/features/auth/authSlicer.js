import { createSlice } from "@reduxjs/toolkit";

const FakeUser = {
  email: "mego@gmail.com",
  password: "mego@gmail.com",
};

const authSlicer = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: null,
    isLoading: true,
    token: null,
    name: "Mego",
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      if (
        state.user.email == FakeUser.email &&
        state.user.password == FakeUser.password
      ) {
        state.isAuth = true;
        state.isLoading = false;
        state.error = null;
        localStorage.setItem("token", action.payload.token);
      }
    },
    signup: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      if (state.user.password == state.user.reWritePassword) {
        state.name = state.user.name;
        state.isAuth = true;
        state.isLoading = false;
        state.error = null;
        localStorage.setItem("token", action.payload.token);
      }
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});
export const { signup, logout, login } = authSlicer.actions;
export default authSlicer.reducer;
