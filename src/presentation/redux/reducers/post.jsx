import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    limit: 3,
    shortBy: 'default',
    total: 0,
    skip: 0,
    list: []
}

export const postSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        // filterLimit: (state, action) => {
        //     state.limit = action.payload.newLimit;
        //     state.shortBy = action.payload.newShortBy;

        //     const params = {
        //         params: {
        //             limit: state.limit,
        //         }
        //     }
        //     // call api o update list product
        //     apiProduct.getAllProduct(params).then((response) => {
        //         let newState = state;
        //         newState.list = response.data.products;
        //         newState.skip = response.data.skip;
        //         newState.total = response.data.total;
        //         state = newState;
        //     }).catch(error => {
        //     });
        // },
        updateListPost: (state, action) => {
            let newState = state;
            newState.list = action.payload.posts;
            newState.skip = action.payload.skip;
            newState.total = action.payload.total;
            state = newState;
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateListPost} = postSlice.actions

export default postSlice.reducer