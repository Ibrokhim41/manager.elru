import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    api_url: "http://127.0.0.1:8000/uz",
    login: true,
    filter: false,
};

export const counterSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.login = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setLogin, setFilter} = counterSlice.actions;

export default counterSlice.reducer;
