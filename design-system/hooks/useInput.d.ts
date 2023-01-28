import { HTMLProps } from 'react';
export declare const useInput: (initialValue?: string) => {
    getValue: () => string;
    Input: (props?: HTMLProps<HTMLInputElement>) => JSX.Element;
};
