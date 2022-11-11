import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from './categoriesOperations';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getCategories.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
    [getCategories.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const categoriesReducer = categoriesSlice.reducer;
