import React from 'react';
import { Container } from '@components/common/Container/Container';
import { NEWS_CARDS } from '@mock/news';
import { NewsCard } from '@components/news/NewsCard/NewsCard';
import { NextPage } from 'next';
import { DefaultLayout } from '@layouts/DefaultLayout/DefaultLayout';
import styles from './News.module.scss';

export const News: NextPage = () => {
    return (
        <DefaultLayout title="Новости">
            <Container>
                <h1 className={styles.title}>Новости Екатеринбурга</h1>
                <div className={styles.news}>
                    {NEWS_CARDS.map(({ id, title, description }) => (
                        <NewsCard
                            key={id}
                            className={styles.newsItem}
                            title={title}
                            description={description}
                        />
                    ))}
                </div>
            </Container>
        </DefaultLayout>
    );
};
