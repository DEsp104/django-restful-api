import { configureStore } from "@reduxjs/toolkit";
// import getItemReducer from "./itemsSlice";
import addItemReducer from "./addItemSlice";
// import deleteItemReducer from "./deleteItemSlice";
// import editItemReducer from "./editItemSlice";



export default configureStore({
  reducer: {
    // getItems: getItemReducer,
    addItem: addItemReducer,
    // deleteItem: deleteItemReducer,
    // editItem: editItemReducer,
  },
});