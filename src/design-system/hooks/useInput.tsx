import { HTMLProps, useEffect, useRef } from 'react';
import { Input } from '../components/Input';

export const useInput = (initialValue = '') => {
  const idRef = useRef(Date.now().toString());

  const getInput = () =>
    document.getElementById(idRef.current)! as HTMLInputElement;

  useEffect(() => {
    getInput().value = initialValue;
  }, []);

  return {
    getValue: () => getInput()?.value ?? '',
    Input: (props?: HTMLProps<HTMLInputElement>) => (
      <Input id={idRef.current} {...props} />
    ),
  };
};
