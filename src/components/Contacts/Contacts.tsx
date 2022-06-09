import React, {FC, useEffect, useState} from 'react';
import classes from '../../scss/Contacts.module.scss'
import logo from '../../assets/Logo/logo.webp'
import logoName from '../../assets/Logo/logoName.webp'
import UILine from "../../UIKit/UILine";
import {
    FaHeadset,
    FaInstagram,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaTelegramPlane,
    FaWhatsapp,
    FaYoutube
} from "react-icons/fa";
import UIText from "../../UIKit/UIText";
import UIModal from "../../UIKit/UIModal";
import ConsultationModal from "../Modals/ConsultationModal";
import disableScroll from "disable-scroll";
import UIButton from "../../UIKit/UIButton";
import ContactsMap from "./ContactsMap";

const Contacts:FC = () => {
    const [visibleConsultationModal, setVisibleConsultationModal] = useState(false)

    useEffect(() => {
        visibleConsultationModal ? disableScroll.on() : disableScroll.off()
    }, [visibleConsultationModal])

    return (
        <>
            <div className={classes['Contacts']}>
                <div className={classes['Contacts__info']}>
                    <UILine position={'left'} type={'horizontal'}/>
                    <div className={classes['Contacts__info-logo']}>
                        <img src={logo} alt=""/>
                        <img src={logoName} alt=""/>
                    </div>

                    <div className={classes['Contacts__info-credentials']}>
                        <div className={classes['Contacts__info-credentials-block']}>
                            <p className={classes['title']}>Телефоны:</p>
                            <UIText type={'primary'}> <a href='tel:+79644444847'> <FaPhoneAlt/> +7 (964) 444-48-47</a></UIText>
                            <p className={classes['Contacts__info-credentials-block-subheader']}>Звонок по РФ бесплатный</p>
                            <UIText type={'primary'}> <a href='tel:+79143205950'><FaPhoneAlt/> +7 (914) 320-59-50</a></UIText>
                            <p className={classes['Contacts__info-credentials-block-subheader']}>Звонок по РФ бесплатный</p>
                            <UIText type={'primary'}> <a href='tel:+74232910330'> <FaPhoneAlt/> +7 (423) 291-03-30</a></UIText>
                            <p className={classes['Contacts__info-credentials-block-subheader']}>Звонок по РФ бесплатный</p>
                        </div>
                        <div className={classes['Contacts__info-credentials-block']}>
                            <p className={classes['title']}>Соц. сети:</p>
                            <UIText type={'primary'}> <a href="https://wa.me/79143205950"><FaWhatsapp/> +7 (914) 320-59-50</a></UIText>
                            <UIText type={'primary'}> <a href="https://www.instagram.com/syndicate_detailing_studio/"><FaInstagram/> syndicate_detailing_studio</a></UIText>
                            <UIText type={'primary'}> <a href="https://t.me/SyndicateDetailing/"><FaTelegramPlane/> syndicate_detailing_studio</a></UIText>
                            <UIText type={'primary'}> <a href="https://www.youtube.com/channel/UCUYLIy4cS365YvImMWwRJiA"><FaYoutube/> Syndicate Детейлинг студия</a></UIText>

                        </div>
                        <div className={classes['Contacts__info-credentials-block']}>
                            <p className={classes['title']}>График работы:</p>
                            <p>Ежедневно с <b>09:00</b> до <b>23:00</b></p>
                            <UIText type={'primary'}> <a href='https://go.2gis.com/615y5'><FaMapMarkerAlt/> г. Владивосток, Океанский проспект, 49</a></UIText>
                            <UIButton type={'outline'} onClick={() => setVisibleConsultationModal(true)}><FaHeadset/>КОНСУЛЬТАЦИЯ</UIButton>
                        </div>
                    </div>
                </div>
                <div className={classes['Contacts__map']}>
                    <ContactsMap/>
                </div>
            </div>
            <UIModal visible={visibleConsultationModal} setVisible={setVisibleConsultationModal}>
                <ConsultationModal/>
            </UIModal>
        </>
    );
};

export default Contacts;