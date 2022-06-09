import React, {useState} from 'react';
import classesSetForm from "../../scss/SetReview.module.scss";
import {FaCheck, FaShare, FaTimesCircle} from "react-icons/fa";
import InputMask from "react-input-mask";
import UIButton from "../../UIKit/UIButton";
import {postConsultation} from "../../store/reducers/ActionCreators";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import UILoader from "../../UIKit/UILoader";

const ConsultationModal = () => {
    const dispatch = useAppDispatch()
    const {consultationError, isConsultationLoading, consultationSuccess} = useAppSelector(state => state.offerReducer)

    const [name, setName] = useState('')
    const [nameTouched, setNameTouched] = useState(false)
    const [phone, setPhone] = useState('')
    const [phoneTouched, setPhoneTouched] = useState(false)
    const [phoneError, setPhoneError] = useState('')
    const [nameError, setNameError] = useState('')
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
        if (checkForm() < 1){
            const data = {name, phone, title: 'Консультация', service: ''}
            dispatch(postConsultation(data))
            setPhone('')
            setName('')
        }
    }

    return (
        <div className={classesSetForm['SetReview__form']}>
            <div className={classesSetForm['SetReview__form-control']}>
                <p
                    className={classesSetForm['SetReview__form-control-pseudotitle']}
                >Заказать консультацию</p>
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
                {consultationSuccess && !isConsultationLoading &&
                    <p
                        style={{
                            display: "flex",
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 5
                        }}
                    ><FaCheck/> Вы успешно отправили заявку !</p>
                }
                {consultationError && !isConsultationLoading && <p
                    style={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 5
                    }}
                > <FaTimesCircle/> {consultationError}</p>}
                {isConsultationLoading && <UILoader/>} </div>
        </div>
    );
};

export default ConsultationModal;