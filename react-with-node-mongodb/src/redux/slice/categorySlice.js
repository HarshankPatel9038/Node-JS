import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategory = createAsyncThunk(
  'category/get',
  async () => {
    const response = await axios.get(`http://localhost:3000/api/v1/category/list-category`);
    if (!response.status) {
      throw new Error('Failed to get category');
    }
    return response.data;
  }
);

export const addCategory = createAsyncThunk(
  'category/post',
  async (addData) => {
    const response = await axios.post(`http://localhost:3000/api/v1/category/create-category`, addData);
    if (!response.status) {
      throw new Error('Failed to add category');
    }
    return response.data;
  }
);

export const updateCategory = createAsyncThunk(
  'category/put',
  async ({id, updateData}) => {
    const response = await axios.put(`http://localhost:3000/api/v1/category/update-category/${id}`, updateData);
    if (!response.status) {
      throw new Error('Failed to update category');
    }
    return response.data;
  }
);

export const deleteCategory = createAsyncThunk(
  'category/delete',
  async (id) => {
    const response = await axios.delete(`http://localhost:3000/api/v1/category/delete-category/${id}`);
    if (!response.status) {
      throw new Error('Failed to delete category');
    }
    return id;
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    isLoading: false,
    data: null,
    isError: false
  },
  extraReducers: (builder) => {
    builder.addCase(getCategory.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      console.log('Error', action.error.message);
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(addCategory.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.data.concat(action.payload);
    });
    builder.addCase(addCategory.rejected, (state, action) => {
      console.log('Error', action.error.message);
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(updateCategory.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(updateCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      let updatedData = state.data.data.map((value) => {
        if (value.id === action.payload.id) {
          return action.payload;
        } else {
          return value;
        }
      })
      state.data = updatedData
    });
    builder.addCase(updateCategory.rejected, (state, action) => {
      console.log('Error', action.error.message);
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(deleteCategory.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.data.filter((value) => value.id !== action.payload);
    });
    builder.addCase(deleteCategory.rejected, (state, action) => {
      console.log('Error', action.error.message);
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export default categorySlice.reducer;
