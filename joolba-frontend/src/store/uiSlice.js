import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    //if theme already set then it will take that value or the default value - LIGHT
    theme: localStorage.getItem("THEME") ?? 'LIGHT', // LIGHT or DARK
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        changeTheme: (state, { payload }) => {
            const { theme } = payload;
            state.theme = theme

            localStorage.setItem('THEME', theme)
        }
    }
})

export default uiSlice.reducer

export const { changeTheme } = uiSlice.actions 