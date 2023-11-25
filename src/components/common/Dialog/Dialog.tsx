import React, { FC, PropsWithChildren } from 'react';

import {
    Close as RadixDialogClose,
    Portal as RadixDialogPortal,
    Content as RadixDialogContent,
    Overlay as RadixDialogOverlay,
    Root as RadixDialogRoot,
} from '@radix-ui/react-dialog';

type DialogProps = void;

export const Dialog: FC<PropsWithChildren<DialogProps>> = (props) => {
    const { children } = props;
    return (
        <RadixDialogRoot>
            <RadixDialogPortal>
                <RadixDialogOverlay>
                    <RadixDialogContent>
                        <RadixDialogClose></RadixDialogClose>

                        {children}
                    </RadixDialogContent>
                </RadixDialogOverlay>
            </RadixDialogPortal>
        </RadixDialogRoot>
    );
};
