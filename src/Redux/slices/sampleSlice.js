import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
}

export const sampleSlice = createSlice({
    name: "sample",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1
        },
        decrement: (state) => {
            state.counter -= 1
        }
    }
})

export const {increment, decrement} = sampleSlice.actions;

export default sampleSlice.reducer