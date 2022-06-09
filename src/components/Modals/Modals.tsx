import React, {useState} from 'react';
import UIModal from "../../UIKit/UIModal";
import OfferModal from "./OfferModal";
import ConsultationModal from "./ConsultationModal";
import disableScroll from "disable-scroll";

const Modals = () => {
    const [visibleConsultationModal, setVisibleConsultationModal] = useState(false)
    const [visibleOfferModal, setVisibleOfferModal] = useState(false)
    visibleOfferModal || visibleConsultationModal ? disableScroll.on() : disableScroll.off()
    return (
        <>
            <UIModal visible={visibleOfferModal} setVisible={setVisibleOfferModal}>
                <OfferModal/>
            </UIModal>

            <UIModal visible={visibleConsultationModal} setVisible={setVisibleConsultationModal}>
                <ConsultationModal/>
            </UIModal>
        </>
    );
};

export default Modals;