import React from 'react';
import { Container } from '@components/common/Container/Container';
import { NewsCard } from '@components/news/NewsCard/NewsCard';
import { NextPage } from 'next';
import { DefaultLayout } from '@layouts/DefaultLayout/DefaultLayout';
import styles from './News.module.scss';
import { NewsPageProps } from '@domains/view';

export const News: NextPage<NewsPageProps> = (props) => {
    const { data: news } = props;
    return (
        <DefaultLayout title="Новости">
            <Container>
                <h1 className={styles.title}>Новости Екатеринбурга</h1>
                <div className={styles.news}>
                    {news.map(({ id, title, text, picture }) => (
                        <NewsCard
                            key={id}
                            className={styles.newsItem}
                            title={title}
                            text={text}
                            picture={picture}
                            hasDetails
                        />
                    ))}
                </div>
            </Container>
        </DefaultLayout>
    );
};
