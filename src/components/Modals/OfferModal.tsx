import React, {useState} from 'react';
import classesSetForm from "../../scss/SetReview.module.scss";
import {FaAngleDown, FaCheck, FaShare, FaTimesCircle} from "react-icons/fa";
import InputMask from "react-input-mask";
import UIButton from "../../UIKit/UIButton";
import {postOffer} from "../../store/reducers/ActionCreators";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import UILoader from "../../UIKit/UILoader";

const OfferModal = () => {
    const dispatch = useAppDispatch()

    const {offerError, offerSuccess, isOfferLoading} = useAppSelector(state => state.offerReducer)

    const [name, setName] = useState('')
    const [nameTouched, setNameTouched] = useState(false)
    const [phone, setPhone] = useState('')
    const [phoneTouched, setPhoneTouched] = useState(false)
    const [phoneError, setPhoneError] = useState('')
    const [nameError, setNameError] = useState('')
    const [service, setService] = useState('Услуга')
    const [serviceError, setServiceError] = useState('')
    const [serviceActive, setServiceActive] = useState(false)
    const serviceActiveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        serviceActive ? setServiceActive(false) : setServiceActive(true)
    }
    const serviceHandler = (e: React.MouseEvent<HTMLDivElement>, s: string) => {
        e.preventDefault()
        setService(s)
        setServiceActive(false)
        if (s !== 'Услуга') {
            setServiceError('')
        }
    }
    const services = [
        'Пленка (Кузов)','Полировка','Защитное покрытие',
        'Дооснащение','Химчистка','Пленка (Салон)','Чистка / Защита кожи', 'Шумоизоляция'
    ]
    const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setPhoneTouched(true)
        setPhone(e.target.value)
        if (phoneTouched && e.target.value.replace(/\D/g, "").length < 11) {
            setPhoneError('Некорректный номер телефона !')
        }
        if (phoneTouched && e.target.value.replace(/\D/g, "").length === 11) {
            setPhoneError('')
        }
    }
    const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setNameTouched(true)
        setName(e.target.value)
        if (nameTouched && e.target.value.length < 1) {
            setNameError('Введите имя !')
        }
        if (nameTouched && e.target.value.length > 0) {
            setNameError('')
        }
    }
    const checkForm = () => {
        let counter = 0
        if (service === 'Услуга'){
            setServiceError('Выберите услугу !')
            counter += 1
        } else {
            setServiceError('')
        }
        if (name.length === 0) {
            setNameError('Введите имя !')
            counter += 1
        }
        if (phone.replace(/\D/g, "").length < 11){
            setPhoneError('Некорректный номер телефона !')
            counter += 1
        }
        return counter
    }
    const sendHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        if (checkForm() < 1) {
            const data = {name, service, phone, title: 'Услуга'}
            dispatch(postOffer(data))
            setPhone('')
            setName('')
            setService('Услуга')
        }
    }
    return (
        <div className={classesSetForm['SetReview__form']}>
            <div className={classesSetForm['SetReview__form-control']}>
                <p
                    className={classesSetForm['SetReview__form-control-pseudotitle']}
                >Запись онлайн</p>
                <input
                    type="text"
                    value={name}
                    placeholder={'Имя'}
                    maxLength={15}
                    onChange={e => nameHandler(e)}
                    className={nameError ? classesSetForm['SetReview__form-control-input-error'] :
                        classesSetForm['SetReview__form-control-input']
                    }
                />
                {nameError && <span>{nameError}</span>}
                <div className={classesSetForm['SetReview__form-control-service']}>
                    <div
                        className={serviceError && service === 'Услуга' ?
                            classesSetForm['SetReview__form-control-service-title-error'] : classesSetForm['SetReview__form-control-service-title']}
                        onClick={e => serviceActiveHandler(e)}
                        style={service === 'Услуга' ? {color: '#7F7F7F'} : {color: 'white'}}
                    >
                        {service}
                        <FaAngleDown/>
                    </div>

                    <div
                        className={serviceActive
                            ? classesSetForm['SetReview__form-control-service-box-active'] :
                            classesSetForm['SetReview__form-control-service-box-disable']}
                    >
                        {services.map(s => (
                            <div onClick={e => serviceHandler(e, s)} key={s}>{s}</div>
                        ))}
                    </div>
                </div>
                {serviceError && <span>{serviceError}</span>}

                <InputMask
                    type="text"
                    value={phone}
                    placeholder={'Номер телефона'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => phoneHandler(e)}
                    className={phoneError ? classesSetForm['SetReview__form-control-input-error'] :
                        classesSetForm['SetReview__form-control-input']
                    }
                    mask="+7\(999) 999-99-99"
                />
                {phoneError && <span>{phoneError}</span>}

                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <UIButton type={'outline'} onClick={e => sendHandler(e)}><FaShare/> Записаться! </UIButton>
                </div>
                {offerSuccess && !isOfferLoading &&
                    <p
                        style={{
                            display: "flex",
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 5
                        }}
                    ><FaCheck/> Вы успешно отправили заявку !</p>
                }
                {offerError && !isOfferLoading && <p
                    style={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 5
                    }}
                > <FaTimesCircle/> {offerError}</p>}
                {isOfferLoading && <UILoader/>}
            </div>
        </div>
    );
};

export default OfferModal;