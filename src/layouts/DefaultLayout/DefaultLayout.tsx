import React, { FC, PropsWithChildren, useEffect, useState } from 'react';

import styles from './DefaultLayout.module.scss';
import clsx from 'clsx';
import { Header } from '@components/header/Header/Header';
import { Footer } from '@components/footer/Footer/Footer';
import { LoginDialog } from '@components/common/LoginDialog/LoginDialog';
import { SignUpDialog } from '@components/common/SignUpDialog/SignUpDialog';
import { NotLoggedInDialog } from '@components/common/NotLoggedInDialog/NotLoggedInDialog';
import { FeedbackDialog } from '@components/common/FeedbackDialog/FeedbackDialog';

const CommonComponents: FC = () => {
    const [isInitialized, setInitialized] = useState(false);

    useEffect(() => setInitialized(true), []);

    /* Common components shared between projects should be placed below (modals, forms, etc..) */
    return isInitialized ? (
        <>
            <LoginDialog />
            <SignUpDialog />
            <NotLoggedInDialog />
            <FeedbackDialog />
        </>
    ) : null;
};

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

                <CommonComponents />
            </div>
        </>
    );
};
