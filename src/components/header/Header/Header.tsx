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
import { $dialogs, setIsOpenLogin, setIsOpenNotLoggedIn, setIsOpenSignUp } from '@stores/dialogs';
import { useUnit } from 'effector-react';
import { $isLoggedIn, setUser } from '@stores/user';

export const Header: FC = () => {
    const router = useRouter();
    const [
        { isOpenLogin, isOpenSignUp },
        setIsOpenLoginFn,
        setIsOpenSignUpFn,
        isLoggedIn,
        setIsOpenNotLoggedInFn,
        setUserFn,
    ] = useUnit([
        $dialogs,
        setIsOpenLogin,
        setIsOpenSignUp,
        $isLoggedIn,
        setIsOpenNotLoggedIn,
        setUser,
    ]);

    const headerItems = isLoggedIn ? HeaderTabs : HeaderTabs.filter((tab) => !tab.needAuth);

    const handleLoginClick = () => {
        setIsOpenLoginFn(true);
    };

    const handleSignUpClick = () => {
        setIsOpenSignUpFn(true);
        router.push('/');
    };

    const handleLogoutClick = () => {
        setUserFn(null);
    };

    return (
        <div className={styles.root}>
            <Link className={styles.logo} href="/">
                <Image src={logo.src} alt="" height="62" width="100" />
            </Link>
            <ul className={styles.list}>
                {headerItems.map((nav) => (
                    <li
                        key={nav.link}
                        className={clsx(styles.item, router.route === nav.link && styles.isActive)}
                    >
                        <HeaderNavItem nav={nav}>{nav.name}</HeaderNavItem>
                    </li>
                ))}
            </ul>
            {isLoggedIn ? (
                <Button variant="outline" accent onClick={handleLogoutClick}>
                    Выйти
                </Button>
            ) : (
                <div className={styles.buttons}>
                    <Button accent onClick={handleLoginClick}>
                        Войти
                    </Button>
                    <Button accent variant="outline" onClick={handleSignUpClick}>
                        Регистрация
                    </Button>
                </div>
            )}
        </div>
    );
};
