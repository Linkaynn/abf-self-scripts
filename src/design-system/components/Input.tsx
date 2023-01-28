interface InputProps {
  id: string;
}

export const Input = ({ id }: InputProps) => {
  return <input id={id} type="text" />;
};
