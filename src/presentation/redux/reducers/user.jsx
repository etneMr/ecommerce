import { createSlice } from "@reduxjs/toolkit"
import Cookies from 'js-cookie'
import { EToken } from '../../../presentation/constants';
import * as jose from 'jose'


const token = Cookies.get(EToken.xToken)
var initialState = {
    user: undefined,
    token: ""
}

if (token) {
    let user = jose.decodeJwt(token)
    initialState = {
        user: user,
        token: token
    }
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token;
            Cookies.set(EToken.xToken, JSON.stringify(state.token));
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.user = undefined;
            state.token = '';
            Cookies.remove(EToken.xToken)
        }
    },
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer