import React, {FC, useState} from 'react';
import UIButton from "./UIKit/UIButton";
import classes from './scss/SetReview.module.scss'
import car from '../assests/car2.png'
import {FaAngleDown, FaPlus, FaRegPaperPlane} from "react-icons/fa";
import star from '../assests/star.png'
import starFull from '../assests/starFull.png'
import Textarea from 'react-expanding-textarea'

const SetReview:FC = () => {

    const services = [
        'Пленка (Кузов)','Полировка','Защитное покрытие',
        'Дооснащение','Химчистка','Пленка (Салон)','Чистка / Защита кожи', 'Шумоизоляция'
    ]

    const [stars, setStars] = useState(1)
    const [starsTouched,setStarsTouched] = useState(false)
    const [starsError, setStarsError] = useState('')

    const [name, setName] = useState('')
    const [nameTouched, setNameTouched] = useState(false)
    const [nameError, setNameError] = useState('')

    const [service, setService] = useState('Услуга')
    const [serviceError, setServiceError] = useState('')
    const [serviceActive, setServiceActive] = useState(false)

    const [files, setFiles] = useState<FileList | null>()

    const [comment, setComment] = useState('')
    const [commentTouched, setCommentTouched] = useState(false)
    const [commentError, setCommentError] = useState('')

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
    const serviceActiveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        serviceActive ? setServiceActive(false) : setServiceActive(true)
    }
    const serviceHandler = (e: React.MouseEvent<HTMLDivElement>, s: string) => {
        e.preventDefault()
        setService(s)
        setServiceActive(false)
    }
    const filesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setFiles(e.target.files)
    }
    const commentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault()
        setCommentTouched(true)
        setComment(e.target.value)
        if (commentTouched && e.target.value.length < 1) {
            setCommentError('Введите комментарий !')
        }
        if (commentTouched && e.target.value.length > 0) {
            setCommentError('')
        }
    }
    const starsHandler = (e: React.MouseEvent<HTMLImageElement>, i:number) => {
        e.preventDefault()
        setStars(i)
        setStarsTouched(true)
    }
    const checkForm = () => {
        let counter = 0
        if (service === 'Услуга'){
            setServiceError('Выберите услугу !')
            counter += 1
        } else {
            setServiceError('')
        }
        if (comment.length === 0) {
            setCommentError('Введите комментарий !')
            counter += 1
        }
        if (name.length === 0) {
            setNameError('Введите имя !')
            counter += 1
        }
        if (!starsTouched){
            setStarsError('Поставьте оценку !')
            counter += 1
        }
        return counter
    }

    const sendHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        if (checkForm() < 1){
            let formData = new FormData();
            formData.append('name', name)
            formData.append('comment', comment)
            formData.append('service', service)
            formData.append('stars', stars.toString())
        }
    }
    return (
        <div className={classes['SetReview']}>
            <div className={classes['SetReview__image']}>
                <img src={car} alt=""/>
            </div>
            <div className={classes['SetReview__form']}>
                <p className={classes['SetReview__form-title']}>Оставьте отзыв:</p>
                <div className={classes['SetReview__form-control']}>
                    <input
                        type="text"
                        value={name}
                        placeholder={'Имя'}
                        maxLength={15}
                        onChange={e => nameHandler(e)}
                        className={nameError ? classes['SetReview__form-control-input-error'] :
                            classes['SetReview__form-control-input']
                        }
                    />
                    {nameError && <span>{nameError}</span>}
                    <div className={classes['SetReview__form-control-service']}>
                        <div
                            className={serviceError && service === 'Услуга' ? classes['SetReview__form-control-service-title-error']
                                : classes['SetReview__form-control-service-title']}
                            onClick={e => serviceActiveHandler(e)}
                            style={service === 'Услуга' ? {color: '#7F7F7F'} : {color: 'white'}}
                        >
                            {service}
                            <FaAngleDown/>
                        </div>

                        <div
                            className={serviceActive
                                ? classes['SetReview__form-control-service-box-active'] :
                                classes['SetReview__form-control-service-box-disable']}
                        >
                            {services.map(s => (
                                <div onClick={e => serviceHandler(e, s)} key={s}>{s}</div>
                            ))}
                        </div>
                    </div>
                    {serviceError && <span>{serviceError}</span>}

                    <input
                        id="file" type="file" accept="image/*"
                        multiple={true} placeholder={'Услуга'}
                        onChange={e => filesHandler(e)}
                    />

                    <label
                        htmlFor="file"
                        style={!files ? {color: '#7F7F7F' } : {color: 'white'}}
                    >
                        Фотографии <FaPlus/>
                    </label>
                    {files && <span>Файлов: {files?.length } </span>}
                    <div className={classes['SetReview__form-control-textarea']}>
                        <Textarea
                            placeholder={'Комментарий'}
                            onChange={e => commentHandler(e)} maxLength={500}
                            className={commentError ? classes['SetReview__form-control-input-error'] : classes['SetReview__form-control-input']}
                        />
                        <span>Символов: {comment.length} / 500</span>
                    </div>

                    {commentError && <span>{commentError}</span>}

                    <div className={classes['SetReview__form-control-send']}>
                        <div className={classes['SetReview__form-control-send-mark']}>
                            <p className={classes['SetReview__form-control-send-mark-title']} style={starsError ? {color: 'red' } : {color: '#7F7F7F'}}>Оценка:</p>
                            <div className={classes['SetReview__form-control-send-mark-box']} >{[1,1,1,1,1].map((s,i) => (<img src={stars < i+1 ? star : starFull} alt="error" key={i} onClick={e => starsHandler(e,i+1)}/>))}</div>
                            <UIButton onClick={e => sendHandler(e)} type={'solid'}> <FaRegPaperPlane/>Отправить</UIButton>
                        </div>

                    </div>
                    {starsError && <span>{starsError}</span>}

                </div>

            </div>

        </div>
    );
};

export default SetReview;