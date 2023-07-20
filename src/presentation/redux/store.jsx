import { configureStore } from '@reduxjs/toolkit'
import shopFilterReducer from './reducers/shopFilter';
import productReducer from './reducers/product';
import cartReducer from './reducers/cart';
// ...

const store = configureStore({
    reducer: {
        shopFilter: shopFilterReducer,
        product: productReducer,
        cart: cartReducer
    },
})

export default store;