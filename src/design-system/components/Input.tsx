import { HTMLProps } from 'react';

type InputProps = {
  id: string;
} & HTMLProps<HTMLInputElement>;

export const Input = ({ id, ...rest }: InputProps) => {
  return <input id={id} type="text" {...rest} />;
};
