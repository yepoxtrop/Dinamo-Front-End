import { createSlice } from "@reduxjs/toolkit";

const buttonsSlice = createSlice({
    name: "buttons",
    initialState: { 
        onWait: false,
    },
    reducers: {
        setWait: (state, action) => {
            state.logIn = action.payload;
        },
    }
});

export default buttonsSlice.reducer;
export const { setWait } = buttonsSlice.actions;