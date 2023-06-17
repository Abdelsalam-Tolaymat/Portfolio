import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {modal:{isOpen:false, modalPageName:''}},
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