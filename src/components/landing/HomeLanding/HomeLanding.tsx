import React, { FC } from 'react';
import styles from './HomeLanding.module.scss';

export const HomeLanding: FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.info}>
                <h1 className={styles.title}>
                    Навигатор
                    <br /> чистоты
                </h1>
                <p className={styles.description}>Информационный портал для населения</p>
            </div>
            <div className={styles.picture}></div>
        </div>
    );
};
