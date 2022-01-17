import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getItems } from "../services/fetchItems";



export const fetchItems = createAsyncThunk(
  "item/fetchItems",
  async () => {
    
    const data = getItems()
    return data;
  }
);


const itemsSlice = createSlice({
  name: "item",
  initialState: {
    status: null,
    items: null,
  },


  extraReducers: {
    [fetchItems.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchItems.fulfilled]: (state, {payload}) => {
      state.status = "success";
      state.items = payload;
    },
    [fetchItems.rejected]: (state, action) => {
      state.status = "failed";
    },

  },


})

export default itemsSlice.reducer;