/* Paqutes */
import { configureStore } from "@reduxjs/toolkit";
/* Reducers */
import usersReducer from "./slices/users/slice.js";
import buttonsReducer from "./slices/buttons/slice.js"

export const store = configureStore({
    reducer: {
        users: usersReducer,
        buttons: buttonsReducer,
    },
});