import { ReactNode } from 'react';
import { TitleContainer } from './stylest';

interface ITitleProps {
  children: ReactNode;
}

export function Title({ children }: ITitleProps) {
  return <TitleContainer>{children}</TitleContainer>;
}
