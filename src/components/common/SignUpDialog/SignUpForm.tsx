import React, { FC } from 'react';
import styles from './LoginDialog.module.scss';
import { Input } from '@components/common/Input/Input';

type LoginFormProps = {};

export const LoginForm: FC<LoginFormProps> = (props) => {
    return (
        <div className={styles.root}>
            <Input />
            <Input />
            <Input />
        </div>
    );
};
