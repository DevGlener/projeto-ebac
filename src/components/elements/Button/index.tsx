import { ButtonContainer, ButtonLink } from './style';

export interface ButtonProps {
  type: 'link' | 'button';
  children: string;
  to?: string;
  onClick?: () => void;
  className?: string;
}

function Button({ type, onClick, to, children, className }: ButtonProps) {
  if (type === 'button') {
    return (
      <ButtonContainer className={className} onClick={onClick}>
        {children}
      </ButtonContainer>
    );
  }
  return (
    <ButtonLink className={className} to={to as string}>
      {children}
    </ButtonLink>
  );
}

export default Button;
