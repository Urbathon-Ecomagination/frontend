import React, { useEffect } from 'react';
import styles from './Feedback.module.scss';
import { Container } from '@components/common/Container/Container';
import { DefaultLayout } from '@layouts/DefaultLayout/DefaultLayout';
import { useRouter } from 'next/router';
import { useUnit } from 'effector-react';
import { $isLoggedIn } from '@stores/user';
import { NextPage } from 'next';
import Button from '@components/common/Button/Button';
import { setIsOpenFeedback } from '@stores/dialogs';

type FeedbackProps = {
    feedback: [];
};

export const Feedback: NextPage<FeedbackProps> = (props) => {
    const { feedback } = props;
    const [isLoggedIn, setIsOpenFeedbackFn] = useUnit([$isLoggedIn, setIsOpenFeedback]);
    const router = useRouter();

    const handleClick = () => {
        setIsOpenFeedbackFn(true);
    };

    useEffect(() => {
        if (!isLoggedIn) router.push('/');
    }, [isLoggedIn]);

    return (
        <DefaultLayout>
            <Container>
                <div className={styles.header}>
                    <h1 className={styles.title}>Мои обращения</h1>
                    <Button onClick={handleClick}>Создать обращение</Button>
                </div>
                <p className={styles.empty}>Вы еще не создавали обращения</p>
            </Container>
        </DefaultLayout>
    );
};
