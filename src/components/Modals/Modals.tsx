import React, {useEffect} from 'react';
import {Transition} from "react-transition-group";
import OfferModal from "./OfferModal";
import {useAppSelector} from "../../hooks/redux";
import disableScroll from "disable-scroll";
import ConsultationModal from "./ConsultationModal";

const Modals = () => {
    const {offer, consultation} = useAppSelector(state => state.modalReducer)

    useEffect(() => {
        offer || consultation ? disableScroll.on() : disableScroll.off()
    }, [offer, consultation])

    return (
        <>
            <Transition in={offer} timeout={200} mountOnEnter unmountOnExit>
                { state => <OfferModal transition={state}/>}
            </Transition>

            <Transition in={consultation} timeout={200} mountOnEnter unmountOnExit>
                { state => <ConsultationModal transition={state}/>}
            </Transition>
        </>
    );
};

export default Modals;