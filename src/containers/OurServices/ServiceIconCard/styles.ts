import styled from "styled-components";

export const ServiceIconCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  .icon {
    svg {
      transition: all 0.2s ease;
      height: 15rem;
      width: 15rem;
    }
    height: 14rem;
  }
  span {
    text-decoration: none;
    width: 15rem;
    font-size: 1.25rem;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.text.light};
  }

  &:active {
    svg {
      transform: scale(0.9);
    }
  }
`;
