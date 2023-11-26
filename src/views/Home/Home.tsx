import React from 'react';
import { NextPage } from 'next';
import { HomePageProps } from '@domains/view';
import { DefaultLayout } from '@layouts/DefaultLayout/DefaultLayout';
import { Container } from '@components/common/Container/Container';
import { NewsCard } from '@components/news/NewsCard/NewsCard';

import styles from './Home.module.scss';
import { HomeLanding } from '@components/landing/HomeLanding/HomeLanding';
import Button from '@components/common/Button/Button';
import { MapComponent } from '@components/map/MapComponent/MapComponent';
import { NavTabs } from '@domains/common';
import { makeRoute } from '@lib/utils';

export const Home: NextPage<HomePageProps> = (props) => {
    const {
        data: { news },
    } = props;
    return (
        <DefaultLayout title="Главная">
            <Container>
                <>
                    <HomeLanding />
                    <section className={styles.section}>
                        <h2 className={styles.subheading}>Новости Екатеринбурга</h2>
                        <div className={styles.news}>
                            {news.map((news) => (
                                <NewsCard key={news.id} truncate {...news} />
                            ))}
                        </div>
                    </section>
                    <section className={styles.section}>
                        <h2 className={styles.subheading}>Интерактивная карта</h2>
                        <div className={styles.interactiveMap}>
                            <MapComponent className={styles.map} />
                            <div className={styles.mapInfo}>
                                <p className={styles.text}>
                                    На этой карте вы можете узнать о событиях в городе, а также
                                    информацию о компании, предоставляющей услуги вывоза мусора в
                                    вашем районе!
                                </p>
                                <Button href={makeRoute(NavTabs.Map)}>Перейти</Button>
                            </div>
                        </div>
                    </section>
                    <section className={styles.section}>
                        <h2 className={styles.subheading}>Обращения</h2>
                        <Button href={makeRoute(NavTabs.Requests)}>Подать обращение</Button>
                    </section>
                </>
            </Container>
        </DefaultLayout>
    );
};
