import React, { FC } from 'react';
import styles from './FeedbackDialog.module.scss';
import { Dialog } from '@components/common/Dialog/Dialog';
import { useUnit } from 'effector-react';
import { $dialogs, setIsOpenFeedback } from '@stores/dialogs';
import { FeedbackForm } from '@components/feedback/Feedback/FeedbackForm';

export const FeedbackDialog: FC = () => {
    const [{ isOpenFeedback }, setIsOpenFeedbackFn] = useUnit([$dialogs, setIsOpenFeedback]);

    return (
        <Dialog isOpen={isOpenFeedback} onIsOpenChange={setIsOpenFeedbackFn}>
            <div className={styles.root}>
                <FeedbackForm />
            </div>
        </Dialog>
    );
};
