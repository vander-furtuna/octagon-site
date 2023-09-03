import styled from 'styled-components';

interface IAccordion {
    isOpen: boolean;
}

export const AccordionContainer = styled.div`
    width: 100%;
    max-width: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    transition: all 0.3s ease-in-out;
`;

export const AccodionHeader = styled.div<IAccordion>`
    width: 100%;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    height: 3.5rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.background.primary.normal};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;

    border-left: 6px solid ${({ theme }) => theme.background.primary.light};
    gap: 0.25rem;

    span {
        font-weight: 600;
        color: ${({ theme }) => theme.text.bold};
        transition: all 0.3s ease-in-out;
    }
    .icon-container {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        svg {
            width: 1.25rem;
            height: 1.25rem;
            width: fit-content;
            transition: all 0.3s ease-in-out;

            color: ${({ theme }) => theme.text.bold};

            stroke: ${({ theme }) => theme.text.bold};
            stroke-width: 4px;
        }
    }
    @media screen and (max-width: 650px) {
        padding: 0 0.75rem;
    }
`;

export const AccordionContent = styled.main<IAccordion>`
    transition: all 0.3s ease-in-out;

    padding: ${({ isOpen }) => (isOpen ? '2rem' : '0')};
    max-height: ${({ isOpen }) => (isOpen ? '20rem' : '0rem')};
    background: ${({ theme }) => theme.background.light};
    border: 1px solid
        ${({ isOpen, theme }) =>
            isOpen ? theme.outline.light : theme.background.bold};
    border-radius: ${({ theme }) => theme.borderRadius};
    overflow: hidden;

    span {
        transition: all 0.3s ease;
        color: ${({ theme }) => theme.text.light};
        opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    }

    @media screen and (max-width: 650px) {
        padding: ${({ isOpen }) => (isOpen ? '1rem' : '0')};

        span {
            text-align: justify;
        }
    }
`;
