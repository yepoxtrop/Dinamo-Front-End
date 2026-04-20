/* Paqutes */
import { configureStore } from "@reduxjs/toolkit";
/* Reducers */
import usersReducer from "../users/slice.js";
import buttonsReducer from "../buttons/slice.js"

export const store = configureStore({
    reducer: {
        users: usersReducer,
        buttons: buttonsReducer
    },
});