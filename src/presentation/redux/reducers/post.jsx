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