import {createSlice} from "@reduxjs/toolkit";

interface ModalsState{
    consultation: boolean
    offer: boolean
}

const initialState: ModalsState = {
    consultation: false,
    offer: false

}
export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        consultationHandler(state){
            state.consultation = !state.consultation;
        },
        offerHandler(state){
            state.offer = !state.offer
        },
    }
})

export default modalSlice.reducer