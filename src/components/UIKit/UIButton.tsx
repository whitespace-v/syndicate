import React, {ReactNode} from 'react';
import classes from "../scss/UIButton.module.scss";

interface ButtonProps {
    children: ReactNode
    type: string
}

const Button = (props: ButtonProps) => {
    const cls = [classes['Button'], classes[props.type]]
    return (
        <div className={cls.join(' ')}>
            ⠀{props.children} {'⠀⠀'}
        </div>
    );
};

export default Button;