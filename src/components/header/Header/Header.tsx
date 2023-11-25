import React, { FC } from 'react';
import { HeaderTabs } from '@lib/common';
import { HeaderNavItem } from '@components/header/HeaderNavItem/HeaderNavItem';
import styles from './Header.module.scss';
import Button from '@components/common/Button/Button';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import logo from '@assets/images/logo-large.png';
import Image from 'next/image';
import Link from 'next/link';

export const Header: FC = () => {
    const route = useRouter();

    return (
        <div className={styles.root}>
            <Link className={styles.logo} href="/">
                <Image src={logo.src} alt="" height="62" width="100" />
            </Link>
            <ul className={styles.list}>
                {HeaderTabs.map((nav) => (
                    <li
                        key={nav.link}
                        className={clsx(styles.item, route.route === nav.link && styles.isActive)}
                    >
                        <HeaderNavItem nav={nav}>{nav.name}</HeaderNavItem>
                    </li>
                ))}
            </ul>
            <div className={styles.buttons}>
                <Button accent>Войти</Button>
                <Button accent variant="outline">
                    Регистрация
                </Button>
            </div>
        </div>
    );
};
