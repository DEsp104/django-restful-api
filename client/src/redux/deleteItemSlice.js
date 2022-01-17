import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { removeItem } from "../services/deleteItem";



export const deleteCurrentItem = createAsyncThunk(
  "deleteItem/deleteCurrentItem",
  async (id) => {
    const data = removeItem(id)
    

    return data;
  }
);


const deleteItemSlice = createSlice({
  name: "deleteItem",
  initialState: {
    status: null,
    deletedItem: null,
  },


  extraReducers: {
    [deleteCurrentItem.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteCurrentItem.fulfilled]: (state, {payload}) => {
      state.status = "success";
      state.deletedItem = payload;
    },
    [deleteCurrentItem.rejected]: (state, action) => {
      state.status = "failed";
    },

  },


})

export default deleteItemSlice.reducer;