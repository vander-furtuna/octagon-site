import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
}

export function Button({ children, href, ...rest }: IButtonProps) {
  return (
    <ButtonContainer {...rest}>
      <a href={href ? href : "#"}>{children}</a>
    </ButtonContainer>
  );
}
