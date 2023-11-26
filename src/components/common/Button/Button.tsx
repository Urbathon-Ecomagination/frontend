import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import styles from './Button.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: string;
    variant?: 'filled' | 'outline';
    accent?: boolean;
    isFullWidth?: boolean;
};
export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
    const {
        href,
        onClick,
        type,
        variant = 'filled',
        accent = false,
        isFullWidth = false,
        children,
    } = props;

    const classes = clsx(
        styles.button,
        variant === 'filled' ? styles.isFilled : styles.isOutline,
        accent && styles.isAccent,
        isFullWidth && styles.isFullWidth,
    );

    if (href !== undefined) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
