import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const modalSlice = createSlice({
    name: 'modal slice',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        },
    }
})

const {reducer} = modalSlice
export default reducer

export const {openModal, closeModal} = modalSlice.actions