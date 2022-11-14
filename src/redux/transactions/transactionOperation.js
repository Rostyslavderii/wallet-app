import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { toastStyled } from '../../utils/GlobalStyle';

axios.defaults.baseURL = 'https://wallet.goit.ua/api';

export const fetchTransactions = createAsyncThunk(
  'transaction/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/transactions');
      return data;
    } catch (error) {
      toast.error('Ooops... Something Went Wrong', toastStyled);
      return rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transaction/addTransaction',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/transactions', transaction);
      toast.success('Transaction successful!', toastStyled);
      return data;
    } catch (error) {
      toast.error('Ooops... Something Went Wrong', toastStyled);
      return rejectWithValue(error.message);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  'transaction/updateTransaction',
  async ({ id, ...transaction }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/transactions/${id}`, transaction);
      toast.success('Transaction was updated!', toastStyled);
      return data;
    } catch (error) {
      toast.error('Ooops... Something Went Wrong', toastStyled);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transaction/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/transactions/${id}`);
      toast.success('Transaction delete!', toastStyled);
      return id;
    } catch (error) {
      toast.error('Ooops... Something Went Wrong', toastStyled);
      return rejectWithValue(error.message);
    }
  }
);
