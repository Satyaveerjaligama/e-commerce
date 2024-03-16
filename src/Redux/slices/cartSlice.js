import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.cartItems.push(action.payload);
        },
        updateItemsInCart: (state, action) => {
            state.cartItems = action.payload;
        }
    }
})

export const {addItemToCart, updateItemsInCart} = cartSlice.actions;

export default cartSlice.reducer;