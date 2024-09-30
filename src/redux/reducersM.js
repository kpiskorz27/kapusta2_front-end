import { combineReducers } from "@reduxjs/toolkit";
import transactionsReducer from "./slices/transactionSliceM";

const rootReducer = combineReducers({
  transactions: transactionsReducer,
});

export default rootReducer;
