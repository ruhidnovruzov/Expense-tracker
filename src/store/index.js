import { configureStore } from '@reduxjs/toolkit';
import { transactionSlice } from './features';

export default configureStore({
  reducer: {
    transactions: transactionSlice,
  },
});
