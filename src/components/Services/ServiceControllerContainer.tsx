import React from 'react';
import ServiceController from "./ServiceController";
import {useAppSelector} from "../../hooks/redux";
import {Transition} from "react-transition-group";

const ServiceControllerContainer = () => {

    const { selectedService, selectedParts } = useAppSelector(state => state.basketReducer)

    return (
        <>
            <Transition
                in={selectedParts.filter(i => i !== 'Не выбрано').length > 0 || selectedService !== 'Не выбрано'}
                timeout={500} mountOnEnter unmountOnExit>
                { state => <ServiceController transition={state}/>}
            </Transition>
        </>
    );
};

export default ServiceControllerContainer;