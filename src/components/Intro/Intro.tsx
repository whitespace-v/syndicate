import React, {FC, useEffect, useState} from 'react';
import classes from '../../scss/Intro.module.scss'
import UIButton from "../../UIKit/UIButton";
import {FaShare, FaHeadset} from "react-icons/fa";
import UIModal from "../../UIKit/UIModal";
import OfferModal from "../Modals/OfferModal";
import ConsultationModal from "../Modals/ConsultationModal";
import disableScroll from "disable-scroll";
import gif from '../../assets/Static/lx570heritage.gif'

const Intro:FC = () => {
    const [visibleConsultationModal, setVisibleConsultationModal] = useState(false)
    const [visibleOfferModal, setVisibleOfferModal] = useState(false)

    useEffect(() => {
        visibleOfferModal || visibleConsultationModal ?
            disableScroll.on() : disableScroll.off()
    }, [visibleConsultationModal, visibleOfferModal])

    return (
        <>
            <div className={classes['Intro']}>
                <div className={classes['Intro__text']}>
                    <p className={classes['Intro__text-header']}>Преображаем <br/> и защищаем автомобили</p>
                    <p className={classes['Intro__text-subheader']}>Центр профессионального <br/>автодетейлинга</p>
                    <p className={classes['Intro__text-ad']}>Получите бесплатный осмотр автомобиля
                        и консультацию!</p>
                    <div className={classes['Intro__text-buttons']}>
                        <UIButton type={'outline'} onClick={() => setVisibleOfferModal(true)}> <FaShare/> Записаться</UIButton>
                        <UIButton type={'primary'} onClick={() => setVisibleConsultationModal(true)}> <FaHeadset/> Консультация</UIButton>
                    </div>
                </div>

                <div className={classes['Intro__image']}>
                    <img src={gif} alt=""/>
                </div>


            </div>

            <UIModal visible={visibleOfferModal} setVisible={setVisibleOfferModal}>
                <OfferModal/>
            </UIModal>

            <UIModal visible={visibleConsultationModal} setVisible={setVisibleConsultationModal}>
                <ConsultationModal/>
            </UIModal>

        </>
    );
};

export default Intro;