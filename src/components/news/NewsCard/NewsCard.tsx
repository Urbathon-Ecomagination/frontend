import React, { FC } from 'react';

import styles from './NewsCard.module.scss';
import Button from '@components/common/Button/Button';
import clsx from 'clsx';
import { makeRoute } from '@lib/utils';
import { NavTabs } from '@domains/common';

type NewsCardProps = {
    title: string;
    text: string;
    truncate?: boolean;
    hasDetails?: boolean;
    picture?: string;
    className?: string;
};

export const NewsCard: FC<NewsCardProps> = (props) => {
    const { title, truncate, text: originalText, picture, hasDetails = false, className } = props;
    const description =
        truncate && originalText.length > 370 ? originalText.slice(0, 369) + '…' : originalText;

    return (
        <div className={clsx(styles.root, className)}>
            <h3 className={styles.title}>{title}</h3>
            <p className={clsx(styles.description, hasDetails && styles.hasDetails)}>
                {description}
                <img src={picture} />
            </p>

            {!hasDetails && <Button href={makeRoute(NavTabs.News)}>Читать</Button>}
        </div>
    );
};
