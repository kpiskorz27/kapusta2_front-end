import { createSlice } from "@reduxjs/toolkit";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: { newBalance: 0, transactions: [] },
  reducers: {
    updateBalance(state, action) {
      state.newBalance = action.payload.newBalance;
    },
  },
});

export const { updateBalance } = transactionsSlice.actions;
export default transactionsSlice.reducer;
