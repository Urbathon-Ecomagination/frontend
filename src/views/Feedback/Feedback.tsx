import React, { FC } from 'react';
import styles from './Feedback.module.scss';
import { Container } from '@components/common/Container/Container';
import { DefaultLayout } from '@layouts/DefaultLayout/DefaultLayout';

type FeedbackProps = void;

export const Feedback: FC<FeedbackProps> = (props) => {
    return (
        <DefaultLayout>
            <Container>
                <div className={styles.root}></div>
            </Container>
        </DefaultLayout>
    );
};
