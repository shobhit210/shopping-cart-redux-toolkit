import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../src/features/cart/cartslice'
import modalReducer from '../src/features/modal/modalslice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer
    }
})