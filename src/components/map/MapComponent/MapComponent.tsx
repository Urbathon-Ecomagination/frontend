import React, { FC } from 'react';
import styles from './Map.module.scss';
import {
    Clusterer,
    YMaps as ReactMap,
    Map as YandexMap,
    Placemark,
    Polygon,
} from '@pbe/react-yandex-maps';
import { defaultMapControls, defaultMapModules } from '@lib/constants';
import ekb from '@mock/ekb2.json';
import clsx from 'clsx';

type MapProps = {
    className?: string;
};

export const Map: FC<MapProps> = ({ className }) => {
    const polygons = ekb.features.filter((item) => item.geometry.type === 'Polygon');
    const placemarks = ekb.features.filter((item) => item.geometry.type === 'Point');

    const defaultState = {
        center: [56.838011, 60.597474],
        zoom: 11,
        controls: defaultMapControls,
    };

    return (
        <ReactMap>
            <YandexMap
                className={clsx(styles.map, className)}
                defaultState={defaultState}
                modules={defaultMapModules}
            >
                {polygons.map((polygon, index) => (
                    <Polygon
                        key={index}
                        geometry={polygon.geometry}
                        properties={{
                            balloonContent: polygon.properties.description,
                            balloonOpen: false,
                        }}
                        options={{
                            fillColor: '#56DB40',
                            fillOpacity: 0.2,
                            strokeColor: '#56DB40',
                        }}
                    />
                ))}
                <Clusterer
                    options={{
                        gridSize: 128,
                        preset: 'islands#darkGreenClusterIcons',
                    }}
                >
                    {placemarks.map((item, index) => (
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
    );
};
