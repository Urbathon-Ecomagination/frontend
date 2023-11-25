import React, { FC } from 'react';
import styles from './Map.module.scss';
import { Container } from '@components/common/Container/Container';
import { DefaultLayout } from '@layouts/DefaultLayout/DefaultLayout';
import { Clusterer, YMaps as ReactMap, Map as YandexMap, Placemark } from '@pbe/react-yandex-maps';
import { defaultMapControls, defaultMapModules } from '@lib/constants';
import ekb from '@mock/ekb.json';
type MapProps = void;

export const Map: FC<MapProps> = () => {
    const data = ekb.features;
    console.log(data);

    const defaultState = {
        center: [56.838011, 60.597474],
        zoom: 11,
        controls: defaultMapControls,
    };

    return (
        <DefaultLayout>
            <Container>
                <h1 className={styles.title}>Интерактивная карта</h1>
                <ReactMap>
                    <YandexMap
                        className={styles.map}
                        defaultState={defaultState}
                        modules={defaultMapModules}
                    >
                        <Clusterer
                            options={{
                                gridSize: 128,
                                preset: 'islands#darkGreenClusterIcons',
                            }}
                        >
                            {data.map((item, index) => (
                                <Placemark
                                    key={index}
                                    geometry={item.geometry}
                                    properties={{
                                        balloonContent: item.properties.description,
                                        balloonOpen: false,
                                    }}
                                    modules={['geoObject.addon.balloon']}
                                    options={{
                                        preset: 'islands#darkGreenIcon',
                                        balloonOffset: [2, -35],
                                        hideIconOnBalloonOpen: false,
                                    }}
                                />
                            ))}
                        </Clusterer>
                    </YandexMap>
                </ReactMap>
            </Container>
        </DefaultLayout>
    );
};
