import React, { FC, PropsWithChildren } from 'react';

import {
    Close as RadixDialogClose,
    Portal as RadixDialogPortal,
    Content as RadixDialogContent,
    Overlay as RadixDialogOverlay,
    Root as RadixDialogRoot,
} from '@radix-ui/react-dialog';

import styles from './Dialog.module.scss';
import clsx from 'clsx';

type DialogProps = {
    isOpen: boolean;
    onIsOpenChange(isOpen: boolean): void;
    className?: string;
};

export const Dialog: FC<PropsWithChildren<DialogProps>> = (props) => {
    const { isOpen, onIsOpenChange, children } = props;
    return (
        <RadixDialogRoot open={isOpen} onOpenChange={onIsOpenChange}>
            <RadixDialogPortal>
                <RadixDialogOverlay className={clsx(styles.overlay, isOpen && styles.isOpen)}>
                    <RadixDialogContent className={styles.content}>
                        <RadixDialogClose></RadixDialogClose>

                        {children}
                    </RadixDialogContent>
                </RadixDialogOverlay>
            </RadixDialogPortal>
        </RadixDialogRoot>
    );
};
