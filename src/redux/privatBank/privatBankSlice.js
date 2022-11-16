import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getCurrency } from './privatBankOperations';

const currencyPersistConfig = {
  key: 'currency',
  storage,
  whitelist: ['currency', 'date'],
};

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currency: null,
    isLoading: false,
    error: null,
    date: null,
  },

  extraReducers: {
    [getCurrency.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getCurrency.fulfilled]: (state, { payload }) => {
      state.currency = payload.currency;
      state.date = payload.date;
      state.isLoading = false;

    },
    [getCurrency.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.date = payload.date;
    },
  },
});

export const currencyPersistedReducer = persistReducer(
  currencyPersistConfig,
  currencySlice.reducer
);