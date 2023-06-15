import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {modal:{isOpen:false}},
    reducers: {changeIsOpen:(state, action)=>{
        state.modal.isOpen = action.payload
    }}
})

export const {changeIsOpen} = modalSlice.actions
export default modalSlice.reducer