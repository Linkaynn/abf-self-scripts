interface ButtonProps {
  children: string;
  onClick: () => void;
  disabled?: boolean;
}
export const Button = ({ children, disabled, onClick }: ButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};
