import React from 'react';
import classes from "../../scss/Gallery.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import {FaCompressAlt} from "react-icons/fa";

interface IFullVisible{
    slidesArray: string[];
    currentSlideHandler: (index: number) => void;
    setFullVisible: (state: boolean) => void;
    transition: string;
}

const FullVisible = (props: IFullVisible) => {
    return (
        <div className={classes['Gallery__fullscreen']}>
            <div className={classes['Gallery__fullscreen-data'] + ' ' + classes[props.transition]}>
                <div
                    onClick={() => props.setFullVisible(false)}
                    className={classes['Gallery__fullscreen-data-cross']}
                >
                    <FaCompressAlt/>
                </div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop
                    modules={[Pagination]}
                >
                    {props.slidesArray.map((image,index) => (
                        <SwiperSlide key={index} onMouseEnter={() => props.currentSlideHandler(index)}>
                            <img src={image} alt=""/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
};

export default FullVisible;