import { configureStore } from '@reduxjs/toolkit'
import shopFilterReducer from './reducers/shopFilter';
import productReducer from './reducers/product';
import cartReducer from './reducers/cart';
import userReducer from './reducers/user';
import postReducer from './reducers/post';
import historyCartReducer from './reducers/historyCart';
// ...

const store = configureStore({
    reducer: {
        shopFilter: shopFilterReducer,
        product: productReducer,
        cart: cartReducer,
        user: userReducer,
        post: postReducer,
        historyCart: historyCartReducer
    },
})

export default store;