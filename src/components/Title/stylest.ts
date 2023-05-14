import styled from 'styled-components';

export const TitleContainer = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.title.color};
  position: relative;
  text-align: center;
  text-transform: uppercase;
  width: fit-content;

  &::after {
    content: '';
    position: absolute;
    width: 85%;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    border-radius: 10px;

    background: ${({ theme }) => theme.title.underline};
  }

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
