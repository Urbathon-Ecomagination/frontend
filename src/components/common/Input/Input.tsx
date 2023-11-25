import React, { FC, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = (props) => {
    return <input className={styles.root} {...props} />;
};
