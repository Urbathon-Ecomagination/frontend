import React, { FC } from 'react';

import styles from './FeedbackForm.module.scss';
import { Input } from '@components/common/Input/Input';
import Button from '@components/common/Button/Button';
import { setIsOpenFeedback } from '@stores/dialogs';
import { useUnit } from 'effector-react';

export const FeedbackForm: FC = () => {
    const setIsOpenFeedbackFn = useUnit(setIsOpenFeedback);

    return (
        <form className={styles.root}>
            <div className={styles.inputs}>
                <label>Имя</label>
                <Input />
                <label>Номер телефона</label>
                <Input />
                <label>Пароль</label>
                <Input />
            </div>
            <Button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    setIsOpenFeedbackFn(false);
                }}
            >
                Зарегистрироваться
            </Button>
        </form>
    );
};
