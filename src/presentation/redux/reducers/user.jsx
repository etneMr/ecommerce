import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: undefined,
    token: ""
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.user = undefined;
            state.token = '';
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(loginUser.pending, (state) => {

    //     });
    //     builder.addCase(loginUser.fulfilled, (state, { payload }) => {
    //         state.token = payload.token;
    //         state.user = payload
    //     });
    //     builder.addCase(loginUser.rejected, (state, { payload }) => {

    //     });
    // }
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer