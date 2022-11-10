import { createSlice } from '@reduxjs/toolkit';

import {
  fetchTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
  getCategories,
  getTransactionsSummary,
} from './transactionOperation';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    items: [],
    categories: [],
    summary: null,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchTransactions.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchTransactions.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
    [fetchTransactions.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [addTransaction.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addTransaction.fulfilled]: (state, { payload }) => {
      state.items.push(payload);
      state.isLoading = false;
    },
    [addTransaction.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [updateTransaction.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [updateTransaction.fulfilled]: (state, { payload }) => {
      const index = state.items.findIndex(({ id }) => id === payload.id);
      state.items[index] = payload;
      state.isLoading = false;
    },
    [updateTransaction.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [deleteTransaction.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteTransaction.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
      state.isLoading = false;
    },
    [deleteTransaction.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [getCategories.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.categories = payload;
      state.isLoading = false;
    },
    [getCategories.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
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

export const transactionsReducer = transactionsSlice.reducer;
