import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  'categories/get',
  async () => {
    const response = await axios.get('http://localhost:3000/api/v1/category/get-category');

    console.log(response);
    if (!response.status) {
      throw new Error('Failed to fetch categories');
    }
    return response.data;
  }
);

export const addCategories = createAsyncThunk(
  'categories/post',
  async (addData) => {
    const response = await axios.post('http://localhost:3000/api/v1/category/create-category', addData);
    if (!response.status) {
      throw new Error('Failed to Add categories');
    }
    return response.data;
  }
);

// export const deleteCategories = createAsyncThunk(
//   'categories/delete',
//   async (id) => {
//     const response = await axios.delete('http://localhost:3000/api/v1/category/delete-category', id);
//     if (!response.status) {
//       throw new Error('Failed to delete categories');
//     }
//     return response.data;
//   }
// );

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
    builder.addCase(addCategories.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(addCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.concat(action.payload);
    });
    builder.addCase(addCategories.rejected, (state, action) => {
      console.log('Error', action.error.message);
      state.isLoading = false;
      state.isError = true;
    });
    // builder.addCase(deleteCategories.pending, (state) => {
    //   state.isLoading = true;
    //   state.isError = false;
    // });
    // builder.addCase(deleteCategories.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.data = state.data.filter((value) => value.id !== action.payload);
    // });
    // builder.addCase(deleteCategories.rejected, (state, action) => {
    //   console.log('Error', action.error.message);
    //   state.isLoading = false;
    //   state.isError = true;
    // });
  }
});

export default categoriesSlice.reducer;
