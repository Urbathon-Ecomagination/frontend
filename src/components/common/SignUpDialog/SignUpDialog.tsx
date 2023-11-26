import React, { FC } from 'react';
import styles from './SignUpDialog.module.scss';
import { useUnit } from 'effector-react';
import { $dialogs, setIsOpenSignUp } from '@stores/dialogs';
import { Dialog } from '@components/common/Dialog/Dialog';
import { SignUpForm } from '@components/common/SignUpDialog/SignUpForm';

export const SignUpDialog: FC = () => {
    const [{ isOpenSignUp }, setIsOpenSignUpFn] = useUnit([$dialogs, setIsOpenSignUp]);

    return (
        <Dialog isOpen={isOpenSignUp} onIsOpenChange={setIsOpenSignUpFn}>
            <div className={styles.root}>
                <SignUpForm />
            </div>
        </Dialog>
    );
};
