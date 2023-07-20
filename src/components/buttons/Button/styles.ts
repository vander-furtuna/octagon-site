import styled from 'styled-components';

interface ButtonContainerProps {
    hasIcon?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    cursor: pointer;

    padding: 1rem 1.25rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.background.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    z-index: 3;
    position: relative;
    width: fit-content;
    a {
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        color: ${({ theme }) => theme.text.bold};
        font-weight: 700;
        text-transform: uppercase;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    transition: all 0.2s ease-in-out;

    &:hover {
        background: ${({ theme }) => theme.background.primary_hover};
    }
    &:active {
        transform: scale(0.95);
    }
`;

export const ButtonIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        color: ${({ theme }) => theme.text.bold};
        width: 1.25rem;
        height: 1.25rem;
    }
`;
