import React from 'react';
import classes from '../scss/UIModal.module.scss'

interface IUIModal{
    visible: boolean;
    setVisible: (visible: boolean) => void;
    children: React.ReactNode;
}

const UIModal = (props: IUIModal) => {
    return (
        <div onClick={() => props.setVisible(false)}
             className={props.visible ? classes['Modal'] + ' '+ classes['visible'] : classes['Modal']}>
            <div
                onClick={e => e.stopPropagation()}
                className={props.visible ? classes['Modal__data'] + ' ' + classes['visible'] : classes['Modal__data']}
            >
                {props.children}
            </div>
        </div>
    );
};

export default UIModal;