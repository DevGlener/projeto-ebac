import { ButtonContainer, ButtonLink } from './style';

export interface ButtonProps {
  type: 'link' | 'button';
  children: string;
  to: string;
  onClick?: () => void;
}

function Button({ type, onClick, to, children }: ButtonProps) {
  if (type === 'button') {
    return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
  }
  return <ButtonLink to={to as string}>{children}</ButtonLink>;
}

export default Button;
