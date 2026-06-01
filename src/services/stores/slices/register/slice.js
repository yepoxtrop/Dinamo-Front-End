import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: "register",
    initialState: { 
        normalRegister:{
            stateRegister: null,
            authRegister: null,
            emailUser: null,
        },
        googleRegister:{
            stateRegister: false,
            authRegister: false,
        },
        outlookRegister:{
            stateRegister: false,
            authRegister: false,
        },
        githubRegister:{
            stateRegister: false,
            authRegister: false,
        },
        
    },
    reducers: {
        setNormalRegisterState: (state, action) => {
            state.normalRegister.stateRegister = action.payload[0];
            state.normalRegister.authRegister = action.payload[1];
            state.normalRegister.emailUser = action.payload[2];
        }
    }
});

export default registerSlice.reducer;
export const { setNormalRegisterState } = registerSlice.actions;