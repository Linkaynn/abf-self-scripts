import { ElementType } from 'react';
export declare const renderDialog: ({ name, Element, size, }: {
    name: string;
    Element: ElementType<{
        dialog: Dialog;
    }>;
    size?: {
        width: number;
        height: number;
    } | undefined;
}) => void;
