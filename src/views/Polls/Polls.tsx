import React, { useEffect } from 'react';
import styles from './Polls.module.scss';
import { DefaultLayout } from '@layouts/DefaultLayout/DefaultLayout';
import { Container } from '@components/common/Container/Container';
import { useUnit } from 'effector-react';
import { $isLoggedIn } from '@stores/user';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

export const Polls: NextPage = () => {
    const isLoggedIn = useUnit($isLoggedIn);
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) router.push('/');
    }, [isLoggedIn]);

    return (
        <DefaultLayout>
            <Container>
                <h1 className={styles.title}>Опросы</h1>
                <p className={styles.empty}>Вы еще не участвовали в опросах</p>
            </Container>
        </DefaultLayout>
    );
};
