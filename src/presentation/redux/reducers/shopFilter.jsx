import { createSlice } from '@reduxjs/toolkit'
import { apiProduct } from "../../services/axios/axoisRepo";
import { EToken } from '../../constants'

const initialState = {
    limit: localStorage.getItem(EToken.xLimit) || 16,
    shortBy: 'default',
    total: 0,
    skip: 0,
    list: []
}

export const shopFilterSlice = createSlice({
    name: 'shop-filter',
    initialState: initialState,
    reducers: {
        filterLimit: (state, action) => {
            state.limit = action.payload.newLimit;
            state.shortBy = action.payload.newShortBy;

            const params = {
                params: {
                    limit: state.limit,
                }
            }
            // call api o update list product
            apiProduct.getAllProduct(params).then((response) => {
                let newState = state;
                newState.list = response.data.products;
                newState.skip = response.data.skip;
                newState.total = response.data.total;
                state = newState;
            }).catch(error => {
            });
        },
        updateListProduct: (state, action) => {
            let newState = state;
            newState.list = action.payload.products;
            newState.skip = action.payload.skip;
            newState.total = action.payload.total;
            state = newState;
        },
    },
})

// Action creators are generated for each case reducer function
export const { filterLimit, updateListProduct } = shopFilterSlice.actions

export default shopFilterSlice.reducer