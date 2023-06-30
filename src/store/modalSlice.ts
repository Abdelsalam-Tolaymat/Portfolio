import { createSlice } from "@reduxjs/toolkit";

interface ModalInterface {modal:{isOpen:boolean, modalPageName:string}}

const modalSlice = createSlice({
    name: 'modal',
    initialState: {modal:{isOpen:false, modalPageName:''}} as ModalInterface,
    reducers: 
        {
            changeModalPageName:(state, action)=>{
                state.modal.modalPageName = action.payload
            },
            changeIsOpen:(state, action)=>{
                state.modal.isOpen = action.payload
            },
            changeEverything:(state, action)=>{
                state.modal = action.payload
            }
        }
        
})

export const {changeModalPageName, changeIsOpen , changeEverything} = modalSlice.actions
export default modalSlice.reducer