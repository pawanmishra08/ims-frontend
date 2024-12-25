import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name : "product",
    initialState: {
    data : [],
    items : {},
    },
    reducers: {
        addProducts: (state, action) => {
            console.log({ action });
            state.data = action.payload;
        },
        findone: (state, action) => {
            const { id } = action.payload;
            const product : any = state.data.find((Products: any) => product.items.id === id);
            if (product) {
                state.items = product;
            }
        }
    }
});


//Export the actions
export const { addProducts , findone } = productSlice.actions;

export default productSlice.reducer;