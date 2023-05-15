import styled from "styled-components";

interface IAccordion {
  isOpen: boolean;
}

export const AccordionContainer = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

export const AccodionHeader = styled.div<IAccordion>`
  width: 100%;
  height: 3.5rem;
  border-radius: 0.5rem;
  background: ${({ isOpen, theme }) =>
    isOpen ? theme.background.primary : theme.background.light};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;

  span {
    font-weight: 600;
    color: ${({ theme }) => theme.text.primary};
  }
  svg {
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const AccordionContent = styled.main<IAccordion>`
  padding: ${({ isOpen }) => (isOpen ? "2rem" : "0")};
  max-height: ${({ isOpen }) => (isOpen ? "20rem" : "0rem")};
  background: ${({ theme }) => theme.background.light};
  border-radius: 0.5rem;
  overflow: hidden;
`;
