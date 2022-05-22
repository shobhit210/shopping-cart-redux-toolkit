import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

export const getCartItems = createAsyncThunk(
    'getCartItems',
    () => {
        const url = 'https://course-api.com/react-useReducer-cart-project'
        let res = fetch(url)
            .then((resp)=>resp.json())
            .catch((err)=>console.log(err))
        return res;
    }
)

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            const productId = action.payload
            //whatever we passed from the front end in dispatch, we get that in the action.payload
            //Here we passed id which we get in action.payload
            state.cartItems = state.cartItems.filter((item) => item.id !== productId)
        },
        increase: (state, action) => {
            const productId = action.payload
            //Here we first get that item from the cartitems whose amount we want to change by using find()
            const cartItem = state.cartItems.find((item) => item.id === productId)
            cartItem.amount += 1
        },
        decrease: (state, action) => {
            const productId = action.payload
            const cartItem = state.cartItems.find((item) => item.id === productId)
            cartItem.amount -= 1
        },
        calculateTotal: (state) => {
            let amt = 0;
            let totalprice = 0;
            state.cartItems.forEach((item) => {
                amt += item.amount;
                totalprice += item.amount * item.price;
            })
            state.amount=amt;
            state.total=totalprice;
        }
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            console.log("GET Cart ITEMS", action);
            state.isLoading = false;
            state.cartItems = action.payload
        },
        [getCartItems.rejected]: (state, action) => {
            state.isLoading = false;
        }
    }
})

console.log("CART SLICE", cartSlice);

export const { clearCart, removeItem, increase, decrease, calculateTotal } = cartSlice.actions

const { reducer } = cartSlice
export default reducer


//34.00 continue