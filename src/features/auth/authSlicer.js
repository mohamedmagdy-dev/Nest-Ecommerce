import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// ========================
// 🔥 Thunk: Sign Up
// ========================
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      return {
        name,
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ========================
// 🔥 Thunk: Log In
// ========================
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      return {
        name: userCredential.user.displayName || "",
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ========================
// 🔥 Thunk: Log Out
// ========================
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ============================
// 🔥 Slice
// ============================
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: null,
    isLoading: false,
    error: null,
  },

  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // ---------- Pending ----------
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      // ---------- Success ----------
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.user = action.payload;
      })

      // ---------- Error ----------
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // ---------- Login Pending ----------
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      // ---------- Login Success ----------
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.user = action.payload;
      })

      // ---------- Login Error ----------
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // ---------- Logout Pending ----------
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      // ---------- Logout Success ----------
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuth = false;
        state.user = null;
      })

      // ---------- Logout Error ----------
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetError } = authSlice.actions;
export default authSlice.reducer;
