import {IOffer} from "./IOffer";
import {createSlice} from "@reduxjs/toolkit";

interface OfferState {
    offer: IOffer;
    isOfferLoading: boolean;
    isConsultationLoading: boolean;
    offerError: string;
    consultationError: string;
    offerSuccess: boolean;
    consultationSuccess: boolean;
}

const initialState: OfferState = {
    offer: {title: '', name: '', phone: '', service: ''},
    isOfferLoading: false,
    isConsultationLoading: false,
    offerError: '',
    consultationError: '',
    offerSuccess: false,
    consultationSuccess: false
}

export const offerSlice = createSlice({
        name: 'offer',
        initialState,
        reducers: {
            offerPosting(state) {
                state.isOfferLoading = true
            },
            offerPostingSuccess(state){
                state.isOfferLoading = false;
                state.offerError = '';
                state.offerSuccess = true
            },
            offerPostingError(state){
                state.offerError = 'Произошла ошибка, попробуйте еще раз!'
                state.isOfferLoading = false
            },
            consultationPosting(state) {
                state.isConsultationLoading = true
            },
            consultationPostingSuccess(state){
                state.isConsultationLoading = false;
                state.consultationError = ''
                state.consultationSuccess = true
            },
            consultationPostingError(state){
                state.consultationError = 'Произошла ошибка, попробуйте еще раз!'
                state.isConsultationLoading = false
            }
        }
    }
)
export default offerSlice.reducer