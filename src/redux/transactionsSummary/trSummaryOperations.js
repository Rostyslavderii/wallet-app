import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTransactionsSummary = createAsyncThunk(
  'trSummary/getTransactionsSummary',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/transactions-summary');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
