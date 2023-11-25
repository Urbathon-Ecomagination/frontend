import React from 'react';
import { NextPage } from 'next';
import { HomePageProps } from '@domains/view';
import { DefaultLayout } from '@layouts/DefaultLayout/DefaultLayout';
import { Container } from '@components/common/Container/Container';
import { NEWS_CARDS } from '@mock/news';
import { NewsCard } from '@components/news/NewsCard/NewsCard';

import styles from './Home.module.scss';
import { HomeLanding } from '@components/landing/HomeLanding/HomeLanding';
import Button from '@components/common/Button/Button';

export const Home: NextPage<HomePageProps> = () => {
    return (
        <DefaultLayout title="Главная">
            <Container>
                <>
                    <HomeLanding />
                    <section className={styles.section}>
                        <h2 className={styles.subheading}>Новости Екатеринбурга</h2>
                        <div className={styles.news}>
                            {NEWS_CARDS.map((news) => (
                                <NewsCard key={news.id} truncate {...news} />
                            ))}
                        </div>
                    </section>
                    <section className={styles.section}>
                        <h2 className={styles.subheading}>Интерактивная карта</h2>
                        <Button>Смотреть</Button>
                    </section>
                    <section className={styles.section}>
                        <h2 className={styles.subheading}>Обращения</h2>
                        <Button>Подать обращение</Button>
                    </section>
                </>
            </Container>
        </DefaultLayout>
    );
};
