import React, {useEffect} from 'react';
import classes from '../../scss/CardStack.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCreative, Pagination} from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";

import item1 from '../../assets/Temp/portfolio1.png'
import item2 from '../../assets/Temp/portfolio2.png'
import item3 from '../../assets/Temp/portfolio3.png'
import item4 from '../../assets/Temp/portfolio4.png'

const CardStack = ({transition}: {transition: string}) => {
    console.log(transition)
    const content = [
        {
            'title': 'Полировка',
            'image': item1,
            'date' : '22.10.2001'
        },
        {
            'title': 'Антихром',
            'image': item2,
            'date' : '22.10.2001'
        },
        {
            'title': 'Ковролин',
            'image': item3,
            'date' : '22.10.2001'
        },
        {
            'title': 'Бронеплёнка',
            'image': item4,
            'date' : '22.10.2001'
        },
    ]

    return (
        <div className={classes['CardStack'] + ' ' + classes[transition] }>
            <div className={classes['CardStack__slider']}>
                <Swiper
                    grabCursor={true}
                    effect={"creative"}
                    pagination={{dynamicBullets: true}}
                    spaceBetween={10}
                    slidesPerView={2.2}
                    centeredSlides={true}
                    creativeEffect={{prev: {translate: [-50, 10, -200],
                            rotate: [-10,-10,0]}, next: {translate: ["100%", 0, 0]}}}
                    modules={[EffectCreative, Pagination]}
                >
                    {content.map(item => (
                        <SwiperSlide key={item.image}>
                            <div className={classes['CardStack__slider-item']}>
                                <p className={classes['CardStack__slider-item-title']}>
                                    {item.title}
                                </p>
                                <img src={item.image} alt=""/>
                                <p className={classes['CardStack__slider-item-date']}>
                                    {item.date}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CardStack;