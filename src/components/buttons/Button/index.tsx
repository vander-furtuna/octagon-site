import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonContainer, ButtonIcon } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    Icon?: JSX.Element;
    href?: string;
}

export function Button({ children, href, Icon, ...rest }: IButtonProps) {
    return (
        <ButtonContainer {...rest}>
            {Icon && <ButtonIcon>{Icon}</ButtonIcon>}

            <a href={href ? href : '#'}>{children}</a>
        </ButtonContainer>
    );
}
