import React, { FC } from 'react';

import styles from './AppealForm.module.scss';
import { Input } from '@components/common/Input/Input';
import Button from '@components/common/Button/Button';
import { setIsOpenAppeal } from '@stores/dialogs';
import { useUnit } from 'effector-react';
import { MOCK_CATEGORIES } from '@mock/news';

export const AppealForm: FC = () => {
    const setIsOpenAppealFn = useUnit(setIsOpenAppeal);

    return (
        <form className={styles.root}>
            <div className={styles.inputs}>
                <label>Текст обращения</label>
                <textarea className={styles.textarea} cols={10} />
                <label>Категория</label>
                <select className={styles.select}>
                    {MOCK_CATEGORIES.map((item) => (
                        <option key={item.id} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
                <label>Номер телефона</label>
                <Input placeholder="+79991234567" />
                <label>Почта</label>
                <Input placeholder="mail@example.com" />
            </div>
            <Button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    setIsOpenAppealFn(false);
                }}
            >
                Подать обращение
            </Button>
        </form>
    );
};
