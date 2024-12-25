import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/productslice";

export default configureStore({
  reducer: {
    // Add reducers here
    products: productReducer,
  },
})
