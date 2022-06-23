import React, {useState} from 'react';
import classes from '../../scss/Portfolio.module.scss'
import UIText from "../../UIKit/UIText";
import UILine from "../../UIKit/UILine";
import Gallery from "./Gallery";
import CardStack from "./CardStack";
import {Transition} from "react-transition-group";

const PortfolioMenu = ({refProp}: {refProp: React.Ref<any>}) => {
    const [active, setActive] = useState(true)

    const [galleryExited, setGalleryExited] = useState(false)
    const [cardsExited, setCardsExited] = useState(true)

    return (
        <div className={classes['Portfolio']} ref={refProp}>
            <UILine type={'vertical'} position={'center'}/>

            <div className={classes['Portfolio__buttons']}>
                <UIText type={active ? 'solid' : 'primary'} onClick={() => setActive(!active)}>Галлерея</UIText>
                <UIText type={!active ? 'solid' : 'primary'} onClick={() => setActive(!active)}>До / После</UIText>
            </div>


            <Transition in={active && cardsExited} timeout={1000} mountOnEnter unmountOnExit
                        onEntered={() => setGalleryExited(false)}
                        onExited={() => setGalleryExited(true)}
            >
                { state => <Gallery transition={state} /> }
            </Transition>

            <Transition in={!active && galleryExited} timeout={1000} mountOnEnter unmountOnExit
                        onEntered={() => setCardsExited(false)}
                        onExited={() => setCardsExited(true)}
            >
                { state => <CardStack transition={state}/> }
            </Transition>


            <UILine position={'center'} type={'vertical'}/>
        </div>
    );
};

export default PortfolioMenu;