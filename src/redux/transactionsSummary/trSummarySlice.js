import { createSlice } from '@reduxjs/toolkit';

import { getTransactionsSummary } from './trSummaryOperations';

const trSummarySlice = createSlice({
  name: 'transactions',
  initialState: {
    summary: null,
    isLoadingSummary: false,
    error: null,
  },

  extraReducers: {
    [getTransactionsSummary.pending]: state => {
      state.isLoadingSummary = true;
      state.error = null;
    },
    [getTransactionsSummary.fulfilled]: (state, { payload }) => {
      state.summary = payload;
      state.isLoadingSummary = false;
    },
    [getTransactionsSummary.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoadingSummary = false;
    },
  },
});

export const trSummaryReducer = trSummarySlice.reducer;
