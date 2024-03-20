import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  'categories/get',
  async () => {
    const response = await axios.get(`http://localhost:3000/api/v1/category/get-category`);

    console.log(response);
    if (!response.status) {
      throw new Error('Failed to get categories');
    }
    return response.data;
  }
);

export const addCategories = createAsyncThunk(
  'categories/post',
  async (addData) => {
    const response = await axios.post(`http://localhost:3000/api/v1/category/create-category`, addData);
    if (!response.status) {
      throw new Error('Failed to add categories');
    }
    return response.data;
  }
);

export const updateCategories = createAsyncThunk(
  'categories/put',
  async ({id, updateData}) => {
    const response = await axios.put(`http://localhost:3000/api/v1/category/update-category/${id}`, updateData);
    if (!response.status) {
      throw new Error('Failed to update categories');
    }
    return response.data;
  }
);

export const deleteCategories = createAsyncThunk(
  'categories/delete',
  async (id) => {
    const response = await axios.delete(`http://localhost:3000/api/v1/category/delete-category/${id}`);
    if (!response.status) {
      throw new Error('Failed to delete categories');
    }
    return id;
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
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
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
      state.data = state.data.data.concat(action.payload);
    });
    builder.addCase(addCategories.rejected, (state, action) => {
      console.log('Error', action.error.message);
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(updateCategories.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(updateCategories.fulfilled, (state, action) => {
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
    builder.addCase(updateCategories.rejected, (state, action) => {
      console.log('Error', action.error.message);
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(deleteCategories.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(deleteCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.data.filter((value) => value.id !== action.payload);
    });
    builder.addCase(deleteCategories.rejected, (state, action) => {
      console.log('Error', action.error.message);
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export default categoriesSlice.reducer;
