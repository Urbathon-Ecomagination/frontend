import React, { FC } from 'react';
import styles from './SignUpDialog.module.scss';
import { Input } from '@components/common/Input/Input';
import Button from '@components/common/Button/Button';
import { useUnit } from 'effector-react/effector-react.umd';
import { setUser } from '@stores/user';
import { User } from '@domains/user';
import { setIsOpenSignUp } from '@stores/dialogs';

export const SignUpForm: FC = () => {
    const setUserFn = useUnit(setUser);
    const setIsOpenSignUpFn = useUnit(setIsOpenSignUp);

    return (
        <form className={styles.root}>
            <div className={styles.inputs}>
                <label>Имя</label>
                <Input />
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
                    setIsOpenSignUpFn(false);
                }}
            >
                Зарегистрироваться
            </Button>
        </form>
    );
};
