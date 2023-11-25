import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import styles from './Button.module.scss';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'filled' | 'outline';
    accent?: boolean;
    isFullWidth?: boolean;
};
export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
    const { type, variant = 'filled', accent = false, isFullWidth = false, children } = props;

    const classes = clsx(
        styles.button,
        variant === 'filled' ? styles.isFilled : styles.isOutline,
        accent && styles.isAccent,
        isFullWidth && styles.isFullWidth,
    );

    return (
        <button className={classes} type={type}>
            {children}
        </button>
    );
};

export default Button;
