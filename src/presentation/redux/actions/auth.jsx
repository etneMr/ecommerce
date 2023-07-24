// authActions.js
import axios from 'axios'
import { apiAuth } from '../../services/axios/axoisRepo'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'http://127.0.0.1:5000'

export const registerUser = createAsyncThunk(
    'auth/register',
    async ({ firstName, email, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            await axios.post(
                `${backendURL}/api/user/register`,
                { firstName, email, password },
                config
            )
        } catch (error) {
            // return custom error message from backend if present
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({ username, password }) => {
        const submission = {
            username: username,
            password: password
        }

        apiAuth.login(JSON.stringify(submission)).then((response) => {
            // dispath(login({ token: response.data.token, user: response.data }));
        }).catch((err) =>
            console.log(err))
    }
)