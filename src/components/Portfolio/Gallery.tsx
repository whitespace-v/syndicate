import React, {useEffect, useState} from 'react';
import classes from '../../scss/Gallery.module.scss'
import item1 from '../../assets/Temp/portfolio1.png'
import item2 from '../../assets/Temp/portfolio4.png'
import item3 from '../../assets/Temp/portfolio2.png'
import FullVisible from "./FullVisible";
import disableScroll from "disable-scroll";
import {Transition} from "react-transition-group";

const Gallery = ({transition}: {transition: string}) => {
    const [prev, setPrev] = useState()
    const [ImageArray] = useState([item3,item1, item2, item3,item1, item2, item3])
    const [slidesArray, setSlidesArray] = useState([item1, item2, item3])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [prevSlide, setPrevSlide] = useState(0)
    const [fullVisible, setFullVisible] = useState(false)

    useEffect(() => {
        fullVisible ? disableScroll.on() : disableScroll.off()
    }, [fullVisible])

    const clickHandler = (image: any) => {
        if (prev !== image) {
            let index = slidesArray.indexOf(image)
            let temp = [...slidesArray]
            temp.splice(index, 1) //delete selected
            temp.splice(currentSlide,0, image) //set selected on current
            setSlidesArray([...temp])
            setPrev(image)
        }
        fullVisible ? setFullVisible(false) : setFullVisible(true)
    }

    const currentSlideHandler = (index: number) => {
        if (prevSlide !== index) {
            setCurrentSlide(index)
            setPrevSlide(index)
        }
    }

    return (
        <div className={classes['Gallery'] + ' ' + classes[transition] }>
            <div className={classes['Gallery__container']}>
                {ImageArray.map((image, index) => (
                    <div
                        onClick={() => clickHandler(image)}
                        key={index} className={classes['Gallery__container-item']}
                    >
                        <div
                            className={classes['Gallery__container-item-image']}
                            style={{backgroundImage: 'url('+image+')'}}
                        />
                    </div>

                ))}
            </div>

            <Transition in={fullVisible} timeout={500} mountOnEnter unmountOnExit>
                { state =>
                    <FullVisible
                        setFullVisible={setFullVisible}
                        currentSlideHandler={currentSlideHandler}
                        slidesArray={slidesArray}
                        transition={state}
                    />
                }
            </Transition>
        </div>
    );
};

export default Gallery;