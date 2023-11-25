import React, { FC, PropsWithChildren } from 'react';

import styles from './DefaultLayout.module.scss';
import clsx from 'clsx';
import { Header } from '@components/header/Header/Header';
import { Footer } from '@components/footer/Footer/Footer';

type DefaultLayoutProps = {
    title?: string;
    description?: string;
};

export const DefaultLayout: FC<PropsWithChildren<DefaultLayoutProps>> = (props) => {
    const { children, title, description } = props;
    return (
        <>
            {/*<Head>*/}
            {/*    <title>{title}</title>*/}
            {/*    <meta name="description" content={description} />*/}
            {/*</Head>*/}

            <div className={styles.root}>
                <header className={styles.header}>{<Header />}</header>

                <main className={clsx(styles.body)}>{children}</main>

                <footer className={styles.footer}>
                    <Footer />
                </footer>
            </div>
        </>
    );
};
