import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    productId: "",
    product: undefined,
}

const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        updateProduct: (state, action) => {
            state.product = action.payload;
            state.productId = action.payload.id;
        },
    }
})

export const { updateProduct } = productSlice.actions;
export default productSlice.reducer