import {configureStore} from "@reduxjs/toolkit";
import product from "./product";

export const store = configureStore({
    reducer: {
        product
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;