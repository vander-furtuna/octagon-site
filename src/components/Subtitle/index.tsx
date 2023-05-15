import { ReactNode } from 'react';
import { SubtitleContainer } from './stylest';

interface ISubtitleProps {
  children: ReactNode;
}

export function Subtitle({ children }: ISubtitleProps) {
  return <SubtitleContainer>{children}</SubtitleContainer>;
}
