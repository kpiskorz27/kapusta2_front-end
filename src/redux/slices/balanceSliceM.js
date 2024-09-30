// src/redux/slices/balanceSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0, // Default balance
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    setBalance: (state, action) => {
      state.balance = action.payload; // Action to set balance
    },
    updateBalance: (state, action) => {
      state.balance += action.payload; // Action to update balance
    },
  },
});

export const { setBalance, updateBalance } = balanceSlice.actions;

export default balanceSlice.reducer;
