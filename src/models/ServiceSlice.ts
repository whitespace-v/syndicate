import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IService} from "./IService";

interface ServiceState{
    service: IService;
}
const initialState: ServiceState = {
    service: {
        id: 0,
        title: '',
        subtitle: '',
        price: '',
        description: '',
        image: null
    }
}
export const serviceSlice = createSlice(({
    name: 'service',
    initialState,
    reducers: {
        fetchService(state, action: PayloadAction<IService>) {
            state.service = action.payload
        }
    }
}))
export default serviceSlice.reducer