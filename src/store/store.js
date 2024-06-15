import { configureStore } from "@reduxjs/toolkit";
import NavbarSlice from "./NavbarSlice";

export const store = configureStore({
    reducer : {
        NavbarData : NavbarSlice
    }
})