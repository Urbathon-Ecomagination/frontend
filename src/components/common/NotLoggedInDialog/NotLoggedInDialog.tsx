import React, { FC } from 'react';
import styles from './NotLoggedInDialog.module.scss';
import { Dialog } from '@components/common/Dialog/Dialog';
import { $dialogs, setIsOpenNotLoggedIn } from '@stores/dialogs';
import { useUnit } from 'effector-react';

export const NotLoggedInDialog: FC = () => {
    const [{ isOpenNotLoggedIn }, setIsOpenNotLoggedInFn] = useUnit([
        $dialogs,
        setIsOpenNotLoggedIn,
    ]);

    return (
        <Dialog isOpen={isOpenNotLoggedIn} onIsOpenChange={setIsOpenNotLoggedInFn}>
            <div className={styles.root}>
                Вы должны быть авторизованы, чтобы воспользоваться данной услугой
            </div>
        </Dialog>
    );
};
