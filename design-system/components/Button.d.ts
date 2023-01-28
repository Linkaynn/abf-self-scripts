interface ButtonProps {
    children: string;
    onClick: () => void;
    disabled?: boolean;
}
export declare const Button: ({ children, disabled, onClick }: ButtonProps) => JSX.Element;
export {};
