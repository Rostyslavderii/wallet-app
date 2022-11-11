import { createSlice } from '@reduxjs/toolkit';

import { getTransactionsSummary } from './trSummaryOperations';

const trSummarySlice = createSlice({
  name: 'transactions',
  initialState: {
    summary: null,
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [getTransactionsSummary.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getTransactionsSummary.fulfilled]: (state, { payload }) => {
      state.summary = payload;
      state.isLoading = false;
    },
    [getTransactionsSummary.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const trSummaryReducer = trSummarySlice.reducer;
