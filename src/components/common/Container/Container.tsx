import React, { FC, PropsWithChildren } from 'react';
import styles from './Container.module.scss';
export const Container: FC<PropsWithChildren> = (props) => {
    const { children } = props;
    return <div className={styles.root}>{children}</div>;
};
