import React, {useEffect, useState} from 'react';
import classes from '../../scss/Gallery.module.scss'
import FullVisible from "./FullVisible";
import disableScroll from "disable-scroll";
import {Transition} from "react-transition-group";

import item1 from '../../assets/Gallery/g1-min.png'
import item2 from '../../assets/Gallery/g2-min.png'
import item3 from '../../assets/Gallery/g3-min.png'
import item4 from '../../assets/Gallery/g4-min.png'
import item5 from '../../assets/Gallery/g5-min.png'
import item6 from '../../assets/Gallery/g6-min.png'
import item7 from '../../assets/Gallery/g7-min.png'
import item8 from '../../assets/Gallery/g8-min.png'
import item9 from '../../assets/Gallery/g9-min.png'
import item10 from '../../assets/Gallery/g10-min.png'
import item11 from '../../assets/Gallery/g11-min.png'
import item12 from '../../assets/Gallery/g12-min.png'
import item13 from '../../assets/Gallery/g13-min.png'
import item14 from '../../assets/Gallery/g14-min.png'
import item15 from '../../assets/Gallery/g15-min.png'
import item16 from '../../assets/Gallery/g16-min.png'
import item17 from '../../assets/Gallery/g17-min.png'
import item18 from '../../assets/Gallery/g18-min.png'
import item19 from '../../assets/Gallery/g19-min.png'
import item20 from '../../assets/Gallery/g20-min.png'
import item21 from '../../assets/Gallery/g21-min.png'

import i1 from '../../assets/Gallery-preview/g1m-min.png'
import i2 from '../../assets/Gallery-preview/g2m-min.png'
import i3 from '../../assets/Gallery-preview/g3m-min.png'
import i4 from '../../assets/Gallery-preview/g4m-min.png'
import i5 from '../../assets/Gallery-preview/g5m-min.png'
import i6 from '../../assets/Gallery-preview/g6m-min.png'
import i7 from '../../assets/Gallery-preview/g7m-min.png'
import i8 from '../../assets/Gallery-preview/g8m-min.png'
import i9 from '../../assets/Gallery-preview/g9m-min.png'
import i10 from '../../assets/Gallery-preview/g10m-min.png'
import i11 from '../../assets/Gallery-preview/g11m-min.png'
import i12 from '../../assets/Gallery-preview/g12m-min.png'
import i13 from '../../assets/Gallery-preview/g13m-min.png'
import i14 from '../../assets/Gallery-preview/g14m-min.png'
import i15 from '../../assets/Gallery-preview/g15m-min.png'
import i16 from '../../assets/Gallery-preview/g16m-min.png'
import i17 from '../../assets/Gallery-preview/g17m-min.png'
import i18 from '../../assets/Gallery-preview/g18m-min.png'
import i19 from '../../assets/Gallery-preview/g19m-min.png'
import i20 from '../../assets/Gallery-preview/g20m-min.png'
import i21 from '../../assets/Gallery-preview/g21m-min.png'


const Gallery = ({transition}: {transition: string}) => {

    const [ImageArray] = useState([
        item1, item2, item3, item4, item5, item6,
        item7, item8, item9, item10,item11, item12,item13,
        item14, item15, item16, item17, item18, item19, item20, item21
    ])

    const [PreviewArray] = useState([
        i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15,i16,i17,i18,i19,i20,i21
    ])

    const [slidesArray, setSlidesArray] = useState(ImageArray)
    const [fullVisible, setFullVisible] = useState(false)

    /** Удаляем все до выбранного,
     * тем самым делаем его первым в массиве,
     *  аппендим удаленные в конец массива **/

    const clickHandler = (index: number) => {
        //delete all before clicked into ImageArray, append deleted to end of array
        setSlidesArray([...ImageArray.slice(index), ...ImageArray.slice(0, index)])
        !fullVisible && setFullVisible(true)
    }

    useEffect(() => {
        fullVisible ? disableScroll.on() : disableScroll.off()
    }, [fullVisible])

    return (
        <div className={classes['Gallery'] + ' ' + classes[transition]}>
            <div className={classes['Gallery__container']}>
                {PreviewArray.map((image, index) => (
                    <div
                        onClick={() => clickHandler(index)}
                        key={index} className={classes['Gallery__container-item']}
                        style={{backgroundImage: 'url('+image+')'}}

                    />
                ))}
            </div>

            <Transition in={fullVisible} timeout={200} mountOnEnter unmountOnExit>
                { state =>
                    <FullVisible
                        setFullVisible={setFullVisible}
                        // currentSlideHandler={currentSlideHandler}
                        slidesArray={slidesArray}
                        transition={state}
                    />
                }
            </Transition>
        </div>
    );
};

export default Gallery;