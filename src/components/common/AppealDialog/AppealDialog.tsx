import React, { FC } from 'react';
import styles from './AppealDialog.module.scss';
import { Dialog } from '@components/common/Dialog/Dialog';
import { useUnit } from 'effector-react';
import { $dialogs, setIsOpenAppeal } from '@stores/dialogs';
import { AppealForm } from '@components/appeal/Appeal/AppealForm';

export const AppealDialog: FC = () => {
    const [{ isOpenAppeal }, setIsOpenAppealFn] = useUnit([$dialogs, setIsOpenAppeal]);

    return (
        <Dialog isOpen={isOpenAppeal} onIsOpenChange={setIsOpenAppealFn}>
            <div className={styles.root}>
                <AppealForm />
            </div>
        </Dialog>
    );
};
