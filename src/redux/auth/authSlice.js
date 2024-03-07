import { createSlice } from '@reduxjs/toolkit';
import { register, logout, refreshUser } from './operations';

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
    builder.addCase(refreshUser.pending, (state, action) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      console.log({ action });
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.rejected, (state, action) => {
      console.log({ action });
      state.isRefreshing = false;
    });
  },
});

export const authReducer = authSlice.reducer;
