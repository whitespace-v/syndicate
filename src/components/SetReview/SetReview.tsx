import React, {FC, useState} from 'react';
import {FaCheck, FaRegCheckCircle} from "react-icons/fa";
import {useAppSelector} from "../../hooks/redux";
import UILoader from "../../UIKit/UILoader";
import SetReviewForm from "./SetReviewForm";
import SetReviewImage from "./SetReviewImage";
import classes from "../../scss/SetReview.module.scss";
import UIButton from "../../UIKit/UIButton";
import {Transition} from "react-transition-group";

const SetReview:FC = () => {
    const {success, isPostingLoading} = useAppSelector(state => state.reviewReducer)
    const [reviewActive,setReviewActive] = useState(false)

    return (

        <div className={classes['SetReview']}>
            <SetReviewImage/>
            {(() => {
                if (isPostingLoading) {
                    return (
                        <UILoader/>
                    )
                } else if (success) {
                    return (
                        <p className={classes['SetReview__success']}> <FaCheck/> Спасибо за ваш отзыв !</p>
                    )
                } else {
                    return (
                        <>
                            {
                                !reviewActive &&
                                <UIButton
                                    type={'outline'} onClick={() => setReviewActive(!reviewActive)}
                                >
                                    <FaRegCheckCircle/>Оставить отзыв
                                </UIButton>
                            }

                            <Transition in={reviewActive} timeout={1000} mountOnEnter unmountOnExit>
                                { state => <SetReviewForm transition={state} />  }
                            </Transition>

                        </>
                    )
                }
            })()}
        </div>
    );
};

export default SetReview;