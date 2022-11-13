import { createSelector } from '@reduxjs/toolkit';

export const selectTransaction = state => state.transactions.items;
export const selectIsLoading = state => state.transactions.isLoading;
export const selectError = state => state.transactions.error;

export const selectBalance = createSelector(
  [selectTransaction],
  transactions => {
    const length = transactions.length;
    const balance = length
      ? transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
      : 0;
    return balance;
  }
);
