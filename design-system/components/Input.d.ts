import { HTMLProps } from 'react';
type InputProps = {
    id: string;
} & HTMLProps<HTMLInputElement>;
export declare const Input: ({ id, ...rest }: InputProps) => JSX.Element;
export {};
