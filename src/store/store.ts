import {combineReducers, configureStore} from "@reduxjs/toolkit";
import reviewReducer from '../models/ReviewSlice'
import offerReducer from '../models/OfferSlice'
import serviceReducer from '../models/ServiceSlice'
import modalReducer from '../models/ModalSlice'

const rootReducer = combineReducers({
    reviewReducer,
    offerReducer,
    serviceReducer,
    modalReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

