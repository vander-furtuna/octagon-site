import styled from 'styled-components';

interface IAccordion {
    isOpen: boolean;
}

export const AccordionContainer = styled.div`
    width: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 850px) {
        width: 100%;
    }
`;

export const AccodionHeader = styled.div<IAccordion>`
    width: 100%;
    transition: all 0.3s ease-in-out;

    height: 3.5rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ isOpen, theme }) =>
        isOpen ? theme.background.primary : theme.background.light};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;

    span {
        font-weight: 600;
        color: ${({ isOpen, theme }) =>
            isOpen ? theme.text.bold : theme.text.primary};
        transition: all 0.3s ease-in-out;
    }
    svg {
        transition: all 0.3s ease-in-out;

        color: ${({ isOpen, theme }) =>
            isOpen ? theme.text.bold : theme.text.primary};

        transform: ${({ isOpen }) =>
            isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    }
`;

export const AccordionContent = styled.main<IAccordion>`
    transition: all 0.3s ease-in-out;

    padding: ${({ isOpen }) => (isOpen ? '2rem' : '0')};
    max-height: ${({ isOpen }) => (isOpen ? '20rem' : '0rem')};
    background: ${({ theme }) => theme.background.light};
    border-radius: ${({ theme }) => theme.borderRadius};
    overflow: hidden;

    span {
        transition: all 0.3s ease;
        color: ${({ theme }) => theme.text.light};
        opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    }
`;
