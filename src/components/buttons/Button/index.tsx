import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonContainer } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...rest }: IButtonProps) {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
}
