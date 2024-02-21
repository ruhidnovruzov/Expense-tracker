import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
  balance: 0,
};

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
      state.balance += action.payload.amount;
    },
  },
});

export const { addTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;