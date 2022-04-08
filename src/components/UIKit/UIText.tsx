import React, {ReactNode} from 'react';
import classes from "../scss/UIText.module.scss";

interface TextProps {
    children: ReactNode;
    type: string
}

const Text = (props: TextProps) => {
    const cls = [classes['Text'], classes[props.type]]
    return (
        <div className={cls.join(' ')}>
            {props.children}
        </div>
    );
};

export default Text;