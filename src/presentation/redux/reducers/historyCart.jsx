import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    limit: 16,
    shortBy: 'default',
    total: 0,
    skip: 0,
    list: []
}

export const historyCartSlice = createSlice({
    name: 'historyCart',
    initialState: initialState,
    reducers: {
        updateListhistoryCart: (state, action) => {
            let newState = state;
            newState.list = action.payload.carts;
            newState.skip = action.payload.skip;
            newState.total = action.payload.total;
            state = newState;
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateListhistoryCart} = historyCartSlice.actions

export default historyCartSlice.reducer