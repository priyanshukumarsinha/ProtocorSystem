import { configureStore } from "@reduxjs/toolkit";
import NavbarSlice from "./NavbarSlice";
import AuthSlice from "./AuthSlice";


export const store = configureStore({
    reducer : {
        auth : AuthSlice,
        NavbarData : NavbarSlice
    }
})