import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slice/categoriesSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer
  }
});
