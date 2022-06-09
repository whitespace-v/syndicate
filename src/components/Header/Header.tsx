import React, {FC, useEffect, useState} from 'react';
import classes from '../../scss/Header.module.scss'
import logo from '../../assets/Logo/logo.webp'
import name from '../../assets/Logo/logoName.webp'
import UIText from "../../UIKit/UIText";
import {FaHeadset, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTelegramPlane, FaWhatsapp, FaYoutube} from "react-icons/fa";
import UIButton from '../../UIKit/UIButton';
import disableScroll from "disable-scroll";
import UIModal from "../../UIKit/UIModal";
import ConsultationModal from "../Modals/ConsultationModal";


const Header:FC = () => {
    const [visibleConsultationModal, setVisibleConsultationModal] = useState(false)

    useEffect(() => {
        visibleConsultationModal ? disableScroll.on() : disableScroll.off()
    }, [visibleConsultationModal])

    return (
        <div className={classes['Header']}>
            <div className={classes['Header__links']}>

                <div className={classes['Header__links-intro']}>
                    <div className={classes['Header__links-intro-logo']}>
                        <img src={logo} alt="" width={50}/>
                        <img src={name} alt="" height={50}/>
                    </div>
                    <div className={classes['Header__links-intro-links']}>
                        <a href="https://wa.me/79143205950"><FaWhatsapp/></a>
                        <a href="https://www.instagram.com/syndicate_detailing_studio/"><FaInstagram/></a>
                        <a href="https://t.me/SyndicateDetailing/"><FaTelegramPlane/></a>
                        <a href="https://www.youtube.com/channel/UCUYLIy4cS365YvImMWwRJiA"><FaYoutube/></a>
                    </div>
                </div>

                <div className={classes['Header__links-phones']}>
                    <UIText type={'primary'}> <a href='tel:+79644444847'> <FaPhoneAlt/> +7 (964) 444-48-47</a></UIText>
                    <UIButton type={'outline'} onClick={() => setVisibleConsultationModal(true)}> <FaHeadset/> Консультация</UIButton>
                </div>
            </div>

            <div className={classes['Header__nav']}>
                <div className={classes['Header__nav-container']}>
                    <UIText type={'solid'} > <a>Главная</a></UIText>
                    <UIText type={'primary'}> <a>Услуги</a></UIText>
                    <UIText type={'primary'}> <a>Портфолио</a></UIText>
                    <UIText type={'primary'}> <a>О нас</a></UIText>
                    <UIText type={'primary'}> <a>Контакты</a></UIText>
                </div>
                <div className={classes['Header__nav-address']}>
                    <UIText type={'primary'}> <a href='https://go.2gis.com/615y5'><FaMapMarkerAlt/> г. Владивосток, Океанский проспект, 49</a></UIText>
                </div>
            </div>
            <UIModal visible={visibleConsultationModal} setVisible={setVisibleConsultationModal}>
                <ConsultationModal/>
            </UIModal>
        </div>
    );
};

export default Header;