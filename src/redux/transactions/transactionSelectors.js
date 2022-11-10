import { createSelector } from '@reduxjs/toolkit';

export const selectTransaction = state => state.transactions.items;
export const selectCategories = state => state.transactions.categories;
export const selectIsLoading = state => state.transactions.isLoading;
export const selectError = state => state.transactions.error;

export const selectBalance = createSelector(
  [selectTransaction],
  transactions => {
    const length = transactions.length;
    const balance = length ? transactions[length - 1].balanceAfter : 0;
    return balance;
  }
);
