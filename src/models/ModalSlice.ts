import {createSlice} from "@reduxjs/toolkit";

interface ModalState {
    visibleConsultationModal: boolean;
    visibleOfferModal: boolean;
}

const initialState: ModalState = {
    visibleConsultationModal: false,
    visibleOfferModal: false
}

export const modalSlice = createSlice({
        name: 'modal',
        initialState,
        reducers: {
            consultationOpen(state) {
                state.visibleConsultationModal = true
                state.visibleOfferModal = false
            },
            offerOpen(state) {
                state.visibleOfferModal = true
                state.visibleConsultationModal = false
            }
        }
    }
)
export default modalSlice.reducer