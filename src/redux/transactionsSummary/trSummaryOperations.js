import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTransactionsSummary = createAsyncThunk(
  'trSummary/getTransactionsSummary',
  async ({ month, year }, { rejectWithValue }) => {
    try {
      const { data } = await axios(
        `/transactions-summary?month=${month}&year=${year}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
