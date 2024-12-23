import { configureStore, UnknownAction } from "@reduxjs/toolkit";
import Products from "../pages/products";
import { productSlice } from "./Slices/productslice";

export default configureStore({
    reducer: {
        //Add reducers here !!
        Products: productReducer,
    },
});

function productReducer(state: unknown, action: UnknownAction): unknown {
    throw new Error("Function not implemented.");
}
