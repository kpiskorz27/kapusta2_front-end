import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./slices/balanceSliceM";
import transactionReducer from "./slices/transactionSliceK";
import userReducer from "./slices/userSliceM";

const store = configureStore({
  reducer: {
    balance: balanceReducer,
    transactions: transactionReducer,
    user: userReducer,
  },
});

export default store;
