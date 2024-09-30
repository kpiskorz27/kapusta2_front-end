import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducersM";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
