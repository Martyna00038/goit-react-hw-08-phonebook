import { createSlice } from '@reduxjs/toolkit';
import { register, logout, refreshUser, login } from './operations';

const initialState = {
  loading: false,
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.pending, state => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      console.log({ action });
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    });
    builder.addCase(logout.fulfilled, () => initialState);
    builder.addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      console.log({ action });
      state.isRefreshing = false;
      state.user = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(refreshUser.rejected, () => initialState);
    builder.addCase(login.pending, state => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = authSlice.reducer;
