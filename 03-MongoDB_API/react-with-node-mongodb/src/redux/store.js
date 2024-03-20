import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer
  }
});
