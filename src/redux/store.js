import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authPersistedReducer } from './auth/authSlice';
import { transactionsReducer } from './transactions/transactionSlice';
import { categoriesReducer } from './categories/categoriesSlice';
import { trSummaryReducer } from './transactionsSummary/trSummarySlice';

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    transactions: transactionsReducer,
    categories: categoriesReducer,
    trSummary: trSummaryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
