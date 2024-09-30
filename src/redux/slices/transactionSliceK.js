// src/redux/slices/transactionSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import reportAPI from "../../api/reportApi";

// Fetch transactions based on the selected month
export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async (monthYear, thunkAPI) => {
    try {
      const response = await reportAPI.getTransactionsForMonth(monthYear);
      return response.data.data; // Ensure you're accessing the correct 'data' structure
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    income: { total: 0, categories: [] },
    expenses: { total: 0, categories: [] },
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.income = action.payload.incomes; // This should match backend data structure
        state.expenses = action.payload.expenses; // Make sure it matches the correct backend data
        state.categories = action.payload.categories; // Add categories with icons to state
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default transactionSlice.reducer;
