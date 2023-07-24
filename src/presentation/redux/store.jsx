import { configureStore } from '@reduxjs/toolkit'
import shopFilterReducer from './reducers/shopFilter';
import productReducer from './reducers/product';
import cartReducer from './reducers/cart';
import userReducer from './reducers/user';
// ...

const store = configureStore({
    reducer: {
        shopFilter: shopFilterReducer,
        product: productReducer,
        cart: cartReducer,
        user: userReducer
    },
})

export default store;