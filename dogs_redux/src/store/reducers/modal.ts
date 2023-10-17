import { createSlice } from "@reduxjs/toolkit";

type StateType = {
    modal: boolean
}

const initialState: StateType = {
    modal: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.modal = true
        },
        closeModal: (state) => {
            state.modal = false
        }
    }
})

export default modalSlice.reducer
export const {closeModal, openModal} = modalSlice.actions