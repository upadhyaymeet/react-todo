import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slice/todoSlice"

const appStore = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default appStore;
