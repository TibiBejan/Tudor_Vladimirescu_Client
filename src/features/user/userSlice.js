import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    loading: false,
    error: null,
    auth: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        requestLogin: (state) => {
            state.loading = true;
            state.auth = false;
        },
        receiveLogin: (state, { payload }) => {
            state.user = payload;
            state.loading = false;
            state.error = null;
            state.auth = true;
        },
        receiveLoginError: (state, { payload }) => {
            state.user = {};
            state.loading = false;
            state.error = payload;
            state.auth = false;
        },
        requestLogout: (state) => {
            state.user = {};
            state.loading = false;
            state.error = null;
            state.auth = false;
        },
        receiveLogoutError: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        requestCheckLogin: (state) => {
            state.loading = true;
            state.auth = false;
        },
        receiveCheckLogin: (state, { payload }) => {
            state.user = payload;
            state.loading = false;
            state.error = null;
            state.auth = true;
        },
        receiveCheckLoginError: (state, { payload }) => {
            state.user = {};
            state.loading = false;
            state.error = payload;
            state.auth = false;
        },
        requestPasswordUpdate: (state) => {
            state.loading = true;
            state.auth = true;
        },
        receivePasswordUpdate: (state, { payload }) => {
            state.user = payload;
            state.loading = false;
            state.error = null;
            state.auth = true;
        },
        receivePasswordUpdateError: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
            state.auth = true;
        },
        requestAccountUpdate: (state) => {
            state.loading = true;
            state.auth = true;
        },
        receiveAccountUpdate: (state, { payload }) => {
            state.user = payload;
            state.loading = false;
            state.error = null;
            state.auth = true;
        },
        receiveAccountUpdateError: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
            state.auth = true;
        }
    },
})

// Action creators are generated for each case reducer function
export const { 
    requestLogin, 
    receiveLogin, 
    receiveLoginError, 
    requestLogout, 
    receiveLogoutError, 
    requestCheckLogin,
    receiveCheckLogin,
    receiveCheckLoginError,
    requestPasswordUpdate,
    receivePasswordUpdate,
    receivePasswordUpdateError,
    requestAccountUpdate,
    receiveAccountUpdate,
    receiveAccountUpdateError
} = userSlice.actions;
export const userSelector = (state) => state.user;
export default userSlice.reducer;
