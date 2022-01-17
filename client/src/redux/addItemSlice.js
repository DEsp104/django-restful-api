import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addItem } from "../services/addNewItem";



export const createNewItem = createAsyncThunk(
  "newItem/createNewItem",
  async ({ categoryField, taskField, completeField }) => {
    const data = addItem({ categoryField, taskField, completeField })
    
    return data;
  }
);


const newItemSlice = createSlice({
  name: "newItem",
  initialState: {
    status: null,
    newItem: null,
  },


  extraReducers: {
    [createNewItem.pending]: (state, action) => {
      state.status = "loading";
    },
    [createNewItem.fulfilled]: (state, {payload}) => {
      state.status = "success";
      state.newItem = payload;
    },
    [createNewItem.rejected]: (state, action) => {
      state.status = "failed";
    },

  },


})

export default newItemSlice.reducer;