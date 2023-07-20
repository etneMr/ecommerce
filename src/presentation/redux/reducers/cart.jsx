import { createSlice } from "@reduxjs/toolkit"
import { EToken } from "../../constants";


const initialState = {
    list: [],
    listId: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        updateCart: (state, action) => {
            let newState = state;
            newState.list = action.payload;
            state = newState;
        },
        addToCart: (state, action) => {
            let newState = state;
            newState.list.push({
                quantity: action.payload.quantity,
                product: action.payload.product
            });
            newState.listId.push({
                quantity: action.payload.quantity,
                productId: action.payload.product.id,
            })
            state = newState;
            localStorage.setItem(EToken.xlistCard, JSON.stringify(state.listId));
        },
        removeFromCart: (state, action) => {
            let newState = state;
            const isSameProduct = (element) => element.product.id === action.payload;
            const isSameProductId = (element) => element.productId === action.payload;
            let index = newState.list.findIndex(isSameProduct);
            newState.list.splice(index, 1);
            index = newState.listId.findIndex(isSameProductId);
            newState.listId.splice(index, 1);
            state = newState;
        }
    }
})

export const { updateCart, addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;