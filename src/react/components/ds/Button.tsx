interface ButtonProps {
  children: string;
  onClick: () => void;
}
export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};