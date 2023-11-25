import React, { FC, PropsWithChildren } from 'react';
import { HeaderTab } from '@domains/common';
import Link from 'next/link';
import styles from './HeaderNavItem.module.scss';

type HeaderNavItemProps = {
    nav: HeaderTab;
};

export const HeaderNavItem: FC<PropsWithChildren<HeaderNavItemProps>> = (props) => {
    const { nav, children } = props;
    return (
        <Link href={nav.link} className={styles.root}>
            {children}
        </Link>
    );
};
