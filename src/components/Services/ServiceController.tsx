import React, {useState} from 'react';
import classes from "../../scss/ServiceController.module.scss";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {basketAppend, basketRemove, sendBasket} from "../../store/reducers/ActionCreators";
import UIButton from "../../UIKit/UIButton";
import {FaPaperPlane, FaPlus, FaTrash} from "react-icons/fa";
import input__class from '../../scss/UIInput.module.scss'
import InputMask from "react-input-mask";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ServiceController = ({transition} : {transition: string}) => {
    const {selectedService, selectedCar, selectedParts, basket} = useAppSelector(state => state.basketReducer)

    const [phone, setPhone] = useState('')
    const [phoneTouched, setPhoneTouched] = useState(false)
    const [phoneError, setPhoneError] = useState('')
    const [name, setName] = useState('')
    const [nameTouched, setNameTouched] = useState(false)
    const [nameError, setNameError] = useState('')
    const { width } = useWindowDimensions(); //viewport width
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

    const dispatch = useAppDispatch()
    const sendHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        if (checkForm() < 1) {
            let service = ''
            for (let i in basket) {
                if (basket.hasOwnProperty(i)) {
                    service += '| Кузов: '+basket[i].selectedCar+"\r\n" + '. Услуга: '+basket[i].selectedService+"\r\n" +
                        '. Детали: '+basket[i].selectedParts.join(', ')+"\r\n";
                }
            }
            dispatch(sendBasket({service, phone, name}))
        }

    }
    return (
        <div className={classes['ServiceController'] + ' ' + classes[transition]}>
            <div className={classes['ServiceController__selectedContainer']}>
                <div className={classes['ServiceController__selectedContainer-title']}>
                    Выбрано:
                </div>
                <div className={classes['ServiceController__selectedContainer-item']}>
                    Тип кузова: <div> {selectedCar} </div>
                </div>
                <div className={classes['ServiceController__selectedContainer-item']}>
                    Услуга: <div>{selectedService} </div>
                </div>
                <div className={classes['ServiceController__selectedContainer-item']}>
                    Детали: <div>{selectedParts.join(', ')} </div>
                </div>
            </div>

            <div className={classes['ServiceController__buttons']}>
                <UIButton type={'outline'} onClick={() => dispatch(basketAppend())}> <FaPlus/> Добавить в корзину</UIButton>
            </div>

            {/*Basket*/}
            {basket && <p><b>Добавлено услуг: </b>{basket.length}</p>}
            <br/>
            <hr/>
            <br/>
            {basket && basket.map((i, index) => (
                <div className={classes['ServiceController__basket']} key={index}>
                    <div className={classes['ServiceController__basket-number']}>
                        {index + 1}.
                    </div>
                    <div className={classes['ServiceController__basket-item']}>
                        <div className={classes['ServiceController__basket-item-field']}>
                            <b>Тип кузова:</b> {i.selectedCar}
                        </div>
                        <div className={classes['ServiceController__basket-item-field']}>
                            <b>Детали:</b>  {i.selectedParts.join(', ')}
                        </div>
                        <div className={classes['ServiceController__basket-item-field']}>
                            <b>Услуга: </b> {i.selectedService}
                        </div>
                        <div className={classes['ServiceController__basket-item-field']}>
                            <UIButton
                                type={'primary'}
                                onClick={() => dispatch(basketRemove(i))}
                            >
                                <FaTrash/> Удалить
                            </UIButton>
                        </div>
                    </div>
                </div>
            ))}
            <br/>
            <hr/>
            <br/>
            {basket.length > 0 &&
                <div className={classes['ServiceController__send']}>

                    <p className={classes['ServiceController__send-title']}>
                        Персональная информация
                    </p>

                    <div className={classes['ServiceController__send-field']}>
                        <p>Имя</p>
                        <div>
                            <input
                                type="text"
                                value={name}
                                maxLength={15}
                                onChange={e => nameHandler(e)}
                                className={nameError ?
                                    input__class['input'] + ' ' + input__class['error'] :
                                    input__class['input']
                                }
                            />
                            {(width > 630 && nameError) && <span>{nameError}</span>}
                        </div>
                    </div>
                    <div className={classes['ServiceController__send-field']}>
                        <p>Номер телефона</p>
                        <div>
                            <InputMask
                                type="text"
                                value={phone}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => phoneHandler(e)}
                                className={phoneError ?
                                    input__class['input'] + ' ' + input__class['error'] :
                                    input__class['input']
                                }
                                mask="+7\(999) 999-99-99"
                            />
                            {(width > 630 && phoneError) && <span>{phoneError}</span>}
                        </div>
                    </div>
                    <div className={classes['ServiceController__send-button']}>
                        <UIButton
                            type={'outline'} onClick={e => sendHandler(e)}
                        >
                            <FaPaperPlane/> Отправить заявку
                        </UIButton>
                    </div>
                </div>
            }

        </div>
    );
};

export default ServiceController;