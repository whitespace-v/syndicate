import React, {FC, useEffect} from 'react';
import UILine from "../../UIKit/UILine";
import classes from '../../scss/Reviews.module.scss'
import 'swiper/scss';
import 'swiper/scss/pagination';
import {useDispatch} from "react-redux";
import {fetchReviews} from "../../store/reducers/ActionCreators";
import ReviewList from "./ReviewList";

const Reviews:FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchReviews())
    }, [])
    return (
        <div className={classes['Reviews']}>
            <UILine type={'horizontal'} position={'left'}/>
            <ReviewList/>
            <UILine type={'horizontal'} position={'right'}/>
        </div>
    );
};

export default Reviews;