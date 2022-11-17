import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseRequest = axios.create({
  baseURL: 'https://api.privatbank.ua/p24api',
});

export const getCurrency = createAsyncThunk(
  'privatBank/getCurrency',
  async (_, { rejectWithValue, getState }) => {
    const dateTS = getState().privatBank.date;
    const currency = getState().privatBank.currency;

    if (dateTS && dateTS > Date.now()) {
      return {
        currency,
        date: dateTS,
      };
    }

    try {
      const { data } = await baseRequest.get(
        '/pubinfo?json&exchange&coursid=5'
      );
      const result = {
        currency: data,
        date: Date.now() + 1000 * 60 * 60,
      };
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
