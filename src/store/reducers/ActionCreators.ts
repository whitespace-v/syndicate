import {AppDispatch} from "../store";
import {reviewSlice} from "../../models/ReviewSlice";
import axios from "axios";
import {IReview} from "../../models/IReview";
import {offerSlice} from "../../models/OfferSlice";
import emailjs from "@emailjs/browser";
import {ReactNode} from "react";
import {serviceSlice} from "../../models/ServiceSlice";
import servicesInfo from '../../components/Services/ServicesInfo'
import {modalSlice} from "../../models/ModalSlice";

export const fetchReviews = () => async(dispatch: AppDispatch) => {
    try{
        dispatch(reviewSlice.actions.reviewsFetching())
        const response = await axios.get<IReview[]>
        ('https://syndicate-fa6ea-default-rtdb.firebaseio.com/reviews.json')
        dispatch(reviewSlice.actions.reviewsFetchingSuccess(response.data))
    } catch (e) {
        dispatch(reviewSlice.actions.reviewsFetchingError(e.message))
    }
}
export const postReviews = (data: object) => async(dispatch: AppDispatch) => {
    try{
        dispatch(reviewSlice.actions.reviewsPosting())
        const response = await axios.post<IReview>
        ('https://syndicate-fa6ea-default-rtdb.firebaseio.com/reviews.json', data)
        dispatch(reviewSlice.actions.reviewsPostingSuccess(response.statusText))
    } catch (e) {
        dispatch(reviewSlice.actions.reviewsPostingError(e.message))
    }
}
export const postOffer = (data: any) => async(dispatch: AppDispatch) => {
    try {
        dispatch(offerSlice.actions.offerPosting())
        await emailjs.send('service_4vi8qrg', 'template_3je89fh', data, 'T4Wj5wNg9lgPTU_sL')
        dispatch(offerSlice.actions.offerPostingSuccess())
    } catch (e) {
        dispatch(offerSlice.actions.offerPostingError())
    }
}
export const postConsultation = (data: any) => async(dispatch: AppDispatch) => {
    try {
        dispatch(offerSlice.actions.consultationPosting())
        await emailjs.send('service_4vi8qrg', 'template_3je89fh', data, 'T4Wj5wNg9lgPTU_sL')
        dispatch(offerSlice.actions.consultationPostingSuccess())
    } catch (e) {
        dispatch(offerSlice.actions.consultationPostingError())
    }
}

export const fetchService = (data: ReactNode) => (dispatch: AppDispatch) => {
    const response = servicesInfo.find(x => x.id === Number(data))
    response && dispatch(serviceSlice.actions.fetchService(response))
}

export const openModal = (condition: boolean, name: string) => (dispatch: AppDispatch) => {
    switch (name){
        case 'offer':
            dispatch(modalSlice.actions.offerOpen)
            break
        case 'consultation':
            dispatch(modalSlice.actions.consultationOpen)
            break
        default: dispatch(modalSlice.actions.consultationOpen)
    }
}