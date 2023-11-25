import React, { FC } from 'react';

import styles from './NewsCard.module.scss';
import Button from '@components/common/Button/Button';
import clsx from 'clsx';

type NewsCardProps = {
    title: string;
    description: string;
    truncate?: boolean;
    className?: string;
};

export const NewsCard: FC<NewsCardProps> = (props) => {
    const { title, truncate, description: originalDescription, className } = props;
    const description =
        truncate && originalDescription.length > 370
            ? originalDescription.slice(0, 369) + '…'
            : originalDescription;

    return (
        <div className={clsx(styles.root, className)}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <Button>Читать</Button>
        </div>
    );
};
