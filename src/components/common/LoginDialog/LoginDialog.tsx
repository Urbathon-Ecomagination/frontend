import React, { FC } from 'react';
import styles from './LoginDialog.module.scss';
import { Dialog } from '@components/common/Dialog/Dialog';
import { useUnit } from 'effector-react';
import { $dialogs, setIsOpenLogin } from '@stores/dialogs';
import { LoginForm } from '@components/common/LoginDialog/LoginForm';

export const LoginDialog: FC = () => {
    const [{ isOpenLogin }, setIsOpenLoginFn] = useUnit([$dialogs, setIsOpenLogin]);

    return (
        <Dialog isOpen={isOpenLogin} onIsOpenChange={setIsOpenLoginFn}>
            <div className={styles.root}>
                <LoginForm />
            </div>
        </Dialog>
    );
};
