import React from 'react';
import classes from "../../scss/SetReview.module.scss";
import gif from "../../assets/Static/crown.gif";

const SetReviewImage = () => {
    return (
        <div className={classes['SetReview__image']}>
            <img src={gif} alt="" width={1000}/>
        </div>
    );
};

export default SetReviewImage;