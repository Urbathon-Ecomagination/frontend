import React from 'react';
import styles from './Map.module.scss';
import { Container } from '@components/common/Container/Container';
import { DefaultLayout } from '@layouts/DefaultLayout/DefaultLayout';
import { MapComponent } from '@components/map/MapComponent/MapComponent';
import { NextPage } from 'next';

type MapProps = void;

export const Map: NextPage<MapProps> = () => {
    return (
        <DefaultLayout>
            <Container>
                <h1 className={styles.title}>Интерактивная карта</h1>
                <MapComponent className={styles.map} />
            </Container>
        </DefaultLayout>
    );
};
