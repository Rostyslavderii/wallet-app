import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { register, login, logout, fetchCurrentUser } from './authOperations';

const initialState = {
  user: { username: '', email: '', id: '' },
  token: null,
  isLoading: false,
  isAuth: false,
  error: null,
  isFetching: false,
};

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: handlePending,
    [login.pending]: handlePending,
    [logout.pending]: handlePending,

    [register.rejected]: handleRejected,
    [login.rejected]: handleRejected,
    [logout.rejected]: handleRejected,

    [register.fulfilled]: (state, { payload: { user, token } }) => {
      state.token = token;
      state.user = user;
      state.isAuth = true;
      state.isLoading = false;
    },
    [login.fulfilled]: (state, { payload: { user, token } }) => {

      state.token = token;
      state.user = user;
      state.isAuth = true;
      state.isLoading = false;
    },
    [logout.fulfilled]: state => {
      state.token = null;
      state.user = { name: '', email: '' };
      state.isAuth = false;
      state.isLoading = false;
    },
    [fetchCurrentUser.pending]: state => {
      state.isLoading = true;
      state.isFetching = true;
    },
    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isAuth = true;
      state.isLoading = false;
      state.isFetching = false;
    },
    [fetchCurrentUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.isFetching = false;
    },
  },
});

export const authPersistedReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
