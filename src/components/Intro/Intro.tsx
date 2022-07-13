import React from 'react';
import classes from '../../scss/Intro.module.scss'
import UIButton from "../../UIKit/UIButton";
import {FaHeadset} from "react-icons/fa";
import introBack from '../../assets/Static/intro-back 1-min.webp'
import {modalHandler} from "../../store/reducers/ActionCreators";
import {useAppDispatch} from "../../hooks/redux";

const Intro = ({refProp}: {refProp: React.Ref<any>}) => {
    const dispatch = useAppDispatch()

    return (
          <div className={classes['Intro']} ref={refProp} style={{backgroundImage: `url("${introBack}")`}}>
                <div className={classes['Intro__text']}>
                    <p className={classes['Intro__text-header']}>Преображаем <br/> и защищаем <br/> автомобили</p>
                    <p className={classes['Intro__text-subheader']}>Центр профессионального <br/>автодетейлинга</p>
                    {/* <p className={classes['Intro__text-ad']}>Получите бесплатный осмотр автомобиля и консультацию!</p> */}
                    <div className={classes['Intro__text-button']}>
                        <UIButton type={'outline'} onClick={() => dispatch(modalHandler('consultation'))}> <FaHeadset/> Консультация</UIButton>
                    </div>
                </div>
            </div>
    );
};

export default Intro;