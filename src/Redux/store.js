import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from "./slices/sampleSlice";

export const store = configureStore({
    reducer: {
        sampleSlice: sampleReducer,
    }
});

