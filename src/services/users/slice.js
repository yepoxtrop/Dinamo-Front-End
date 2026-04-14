import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: { 
        logIn: undefined,
        logOut: undefined,
    },
    reducers: {
        setLogin: (state, action) => {
            state.logIn = action.payload;
        },
        setLogout: (state, action) => {
            state.logOut = action.payload;
        }
    }
});

export default usersSlice.reducer;
export const { setLogin, setLogout } = usersSlice.actions;