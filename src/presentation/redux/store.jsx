import { configureStore } from '@reduxjs/toolkit'
import shopFilterReducer from './reducers/shopFilter';
// ...

const store = configureStore({
    reducer: {
        shopFilter: shopFilterReducer
    },
})

export default store;