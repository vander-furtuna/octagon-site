import styled from 'styled-components';

export const ButtonContainer = styled.button`
  cursor: pointer;

  padding: 1rem 1.25rem;
  border-radius: 20rem;
  background: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.text.bold};
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.background.primary_hover};
  }
`;
