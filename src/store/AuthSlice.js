import { createSlice } from "@reduxjs/toolkit";
import {fetchUserData} from "../utils/fetchLocalStorageData.js"

const userInfo = fetchUserData();

export const initialState = {
    isAuthenticated : userInfo ? true : false,
    user : userInfo,
}

const AuthSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        login : (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout : (state) => {
            state.isAuthenticated = false;
        }
    }
})

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;