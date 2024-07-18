import { createSlice } from "@reduxjs/toolkit";
import { StudentNavbar, TeacherNavbar } from "../utils/NavbarData";
import {fetchUserData} from "../utils/fetchLocalStorageData.js"

const userInfo = fetchUserData();

export const initialState = {
    isStudent:  userInfo?.role === 'STUDENT' ? true : false,
    StudentNavbarData : StudentNavbar,
    TeacherNavbarData : TeacherNavbar,
    activeElement : 'Dashboard',
}

const NavbarSlice = createSlice({
    name : 'NavbarData',
    initialState,
    reducers : {
        isStudentUpdate : (state, action) => {
            state.isStudent = action.payload;
        },
        makeActive : (state, action) => {
            if(state.isStudent){
                const updatedMenu = state.StudentNavbarData.map((item) => {
                    if(item.id === action.payload.id){
                        state.activeElement = item.title;
                        return ({...item, status: true})
                    }else{
                        return ({...item, status: 
                            false})
                    }
                })
                state.StudentNavbarData = updatedMenu;
            }else{
                const updatedMenu = state.TeacherNavbarData.map((item) => {
                    if(item.id === action.payload.id){
                        state.activeElement = item.title;
                        return ({...item, status: true})
                    }else{
                        return ({...item, status: false})
                    }
                })
                state.TeacherNavbarData = updatedMenu;
            }
        }
    }
})

export const { makeActive, isStudentUpdate } = NavbarSlice.actions;
export default NavbarSlice.reducer;