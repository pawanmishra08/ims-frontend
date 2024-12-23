import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name : "products",
    initialState: {
    data : [],
    items : {},
    },
    reducers: {
        AddProduct: (state, action) => {
            console.log({ action });
            state.data = action.payload;
        },
        findone: (state, action) => {
            const { id } = action.payload;
            const products = state.data.findone((Products: any) => products.items.id === id);
            if(products){
                state.items = products;
            }
        }
    }
});


//Export the actions
export const { AddProduct , findone } = productSlice.actions;

export default productSlice.reducer;