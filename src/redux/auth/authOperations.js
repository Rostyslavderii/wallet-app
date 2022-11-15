import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { toastStyled } from 'utils/GlobalStyle';

export const baseAPI = axios.create({
  baseURL: 'https://wallet.goit.ua/api',
});

const token = {
  set(token) {
    baseAPI.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    baseAPI.defaults.headers.common['Authorization'] = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await baseAPI.post('/auth/sign-up', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 409) {
        toast.error('User with such email already exists!', toastStyled);
      } else {
        toast.error('Validation error.', toastStyled);
      }

      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await baseAPI.post('/auth/sign-in', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 404) {
        toast.error('User with such email not found!', toastStyled);
      } else if (error.response.status === 403) {
        toast.error('Provided password is incorrect!', toastStyled);
      } else {
        toast.error('Validation error.', toastStyled);
      }

      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await baseAPI.delete('/auth/sign-out');
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const tokenCurrent = getState().auth.token;
    if (!tokenCurrent) {
      return rejectWithValue();
    }
    token.set(tokenCurrent);
    try {
      const { data } = await baseAPI.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
