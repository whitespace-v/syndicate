import React, {useEffect, useState} from 'react';
import {FaInfo,FaLevelDownAlt} from 'react-icons/fa';
import classes from '../scss/UIHint.module.scss'
import {useAppSelector} from "../hooks/redux";
import {Transition} from "react-transition-group";

const UIHint = () => {

    const { selectedService, selectedParts } = useAppSelector(state => state.basketReducer)

    const [state, setState] = useState<boolean>(false)
    const [touched, setTouched] = useState<boolean>(false)
    const [compactExited, setCompactExited] = useState<boolean>(false)
    const [expandedExited, setExpandedExited] = useState<boolean>(true)
    //open hint by clicking smth of services container

    useEffect(() => {
        if (!touched){
            if (selectedParts.filter(i => i !== 'Не выбрано').length > 0 || selectedService !== 'Не выбрано'){
                setState(true)
            }
        }
    }, [selectedParts, selectedService])

    //open hint by manual click
    const manualExpand = () => {
        setState(!state)
        setTouched(true)
    }

    return (
        <div className={classes['UIHint']}>
            <div className={classes['UIHint__content']}>
                {/* Expanded */}
                <Transition in={state && compactExited} timeout={200}
                            mountOnEnter unmountOnExit
                            onEntered={() => setExpandedExited(false)}
                            onExited={() => setExpandedExited(true)}
                >
                    { state =>
                        <div className={classes['UIHint__content-text'] + ' ' + classes[state]}>
                            <b>Соберите ваш пакет услуг:</b> <br/> <br/>
                            1. Выберите услугу из дерева услуг.<br/><br/>
                            2. Выберите ваш тип кузова в карточке услуги. <br/><br/>
                            3. Вращайте 3D модель автомобиля, приближайте колесиком мышки и двойным кликом выберите нужную часть/части авто. <br/><br/>
                            4. Управляйте выбранными услугами в корзине (ниже карточки услуги).
                        </div>
                    }
                </Transition>
                {/* Compact */}
                <Transition in={!state && expandedExited}
                            timeout={200} mountOnEnter unmountOnExit
                            onEntered={() => setCompactExited(false)}
                            onExited={() => setCompactExited(true)}
                >
                    { state =>
                        <div
                            className={classes['UIHint__content-text'] + ' ' + classes['compact'] + ' '+ classes[state]}
                            onClick={() => manualExpand() }
                        >
                            <b>Подсказка</b> <FaInfo/>
                        </div>
                    }
                </Transition>


                <div className={classes['UIHint__content-cross']}
                     onClick={() => manualExpand()}>
                    {state && <FaLevelDownAlt/> }
                </div>
            </div>
        </div>
    );
};

export default UIHint;