import React, { FC } from 'react';
import styles from './Polls.module.scss';
import { DefaultLayout } from '@layouts/DefaultLayout/DefaultLayout';
import { Container } from '@components/common/Container/Container';

type PollsProps = void;

export const Polls: FC<PollsProps> = (props) => {
    return (
        <DefaultLayout>
            <Container>
                <div className={styles.root}></div>
            </Container>
        </DefaultLayout>
    );
};
