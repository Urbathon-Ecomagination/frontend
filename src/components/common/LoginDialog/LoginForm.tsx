import React, { FC } from 'react';
import styles from './LoginDialog.module.scss';
import { Input } from '@components/common/Input/Input';
import Button from '@components/common/Button/Button';
import { User } from '@domains/user';
import { useUnit } from 'effector-react/effector-react.umd';
import { setUser } from '@stores/user';
import { setIsOpenLogin } from '@stores/dialogs';

export const LoginForm: FC = () => {
    const setUserFn = useUnit(setUser);
    const setIsOpenLoginFn = useUnit(setIsOpenLogin);

    return (
        <form className={styles.root}>
            <div className={styles.inputs}>
                <label>Номер телефона</label>
                <Input placeholder="+79991234567" />
                <label>Пароль</label>
                <Input />
            </div>
            <Button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    setUserFn({} as User);
                    setIsOpenLoginFn(false);
                }}
            >
                Войти
            </Button>
        </form>
    );
};
