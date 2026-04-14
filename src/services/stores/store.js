/* Paqutes */
import { configureStore } from "@reduxjs/toolkit";
/* Reducers */
import usersReducer from "../users/slice.js";

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
});