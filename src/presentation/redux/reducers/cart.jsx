import { createSlice } from "@reduxjs/toolkit"
import { EToken } from "../../constants";


const initialState = {
    list: [],
    listId: [],
    subTotal: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        updateCart: (state, action) => {
            // newState
            let newState = state;
            newState.list = action.payload.listProd;
            newState.listId = action.payload.listCart;
            // sum subTotal
            let subTotal = 0;
            for (let item of newState.list)
                subTotal += item.quantity * item.product.price;
            newState.subTotal = subTotal;
            //return
            state = newState;
        },
        addToCart: (state, action) => {
            let newState = state;
            // get element condition
            const isSameProduct = (element) => element.product.id === action.payload.product.id;
            const isSameProductId = (element) => element.productId === action.payload.product.id;
            // remove product in list & re-sum subtotal
            let index = newState.list.findIndex(isSameProduct);
            console.log(index);
            // if exist productId 
            if (index !== -1) {
                // update quantity `
                newState.list[index].quantity += action.payload.quantity;
                index = newState.listId.findIndex(isSameProductId);
                newState.listId[index].quantity += action.payload.quantity;
            } else {
                // push to list prodcut & quantity
                newState.list.push({
                    quantity: action.payload.quantity,
                    product: action.payload.product
                });
                // push to list productID & quantity - to store in local storage
                newState.listId.push({
                    quantity: action.payload.quantity,
                    productId: action.payload.product.id,
                })
            }
            // sum new product subtotal
            newState.subTotal += action.payload.product.price * action.payload.quantity;
            // return
            state = newState;
            // store productId & quantity to local
            console.log(JSON.stringify(state.listId))
            localStorage.setItem(EToken.xlistCard, JSON.stringify(state.listId));
        },
        removeFromCart: (state, action) => {
            let newState = state;
            // get element condition
            const isSameProduct = (element) => element.product.id === action.payload;
            const isSameProductId = (element) => element.productId === action.payload;
            // remove product in list & re-sum subtotal
            let index = newState.list.findIndex(isSameProduct);
            newState.subTotal -= newState.list[index].product.price * newState.list[index].quantity;
            newState.list.splice(index, 1);
            // remover productID & quantity to local storageq
            index = newState.listId.findIndex(isSameProductId);
            newState.listId.splice(index, 1);
            //return
            state = newState;
            // store productId & quantity to local
            localStorage.setItem(EToken.xlistCard, JSON.stringify(state.listId));
        }
    }
})

export const { updateCart, addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;