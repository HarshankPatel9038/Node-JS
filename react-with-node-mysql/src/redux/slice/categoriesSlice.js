import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  'categories/fetch',
  async () => {
    // try {
    const response = await fetch('http://localhost:3000/api/v1/category/get-category');
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data = await response.json();
    return data;
    // } catch (error) {
    //   throw error;
    // }
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    isLoading: false,
    data: null,
    isError: false
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      console.log('Error', action.error.message);
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export default categoriesSlice.reducer;
