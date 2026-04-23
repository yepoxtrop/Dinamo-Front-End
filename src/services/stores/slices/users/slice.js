import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: { 
        logIn: undefined,
        logOut: undefined,
        idUser: undefined,
        rolUserId: undefined,
        nameUser: undefined,
        realNameUser: undefined,
        dniUser: undefined,
        stateUser: undefined
    },
    reducers: {
        setLogin: (state, action) => {
            state.logIn = action.payload[0];
            state.stateUser = action.payload[1];
            if (action.payload[2]) {
                state.idUser = action.payload[2].idUsuario;
                state.rolUserId = action.payload[2].rolUsuarioId;
                state.nameUser = action.payload[2].nombreUsuario;
                state.realNameUser = action.payload[2].nombreCompletoUsuario;
                state.dniUser = action.payload[2].cedulaUsuario;
            } else {
                state.idUser = undefined;
                state.rolUserId = undefined;
                state.nameUser = undefined;
                state.realNameUser = undefined;
                state.dniUser = undefined;
            }
            state.logOut = undefined;
        },
        setLogout: (state, action) => {
            state.logOut = action.payload;
        },
        setStateUser: (state, action) => {
            state.stateUser = action.payload;
        }
    }
});

export default usersSlice.reducer;
export const { setLogin, setLogout } = usersSlice.actions;