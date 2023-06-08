import styled, { css } from 'styled-components';

interface ISubFooterButtonProps {
  isFill?: boolean;
}

export const FooterContainer = styled.footer`
  width: 100%;
  height: 22.5rem;
  background-color: ${({ theme }) => theme.background.black};
  @media screen and (max-width: 700px) {
    height: 30rem;
  }
`;

export const FooterContent = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  padding: 4rem 8rem;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    padding: 4rem;
  }

  @media screen and (max-width: 900px) {
    padding: 2.5rem;

    svg {
      width: 8rem;
      height: auto;
    }
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const FooterInformations = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  @media screen and (max-width: 900px) {
    gap: 2rem;
  }
  @media screen and (max-width: 550px) {
    flex-direction: column-reverse;
  }
`;

export const FooterNav = styled.ul`
  strong {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text.primary};
  }
  li {
    list-style: none;
    line-height: 2;

    a {
      font-weight: 500;
      font-size: 1rem;
      color: ${({ theme }) => theme.text.light};
      text-decoration: none;
    }
  }
`;

export const FooterMap = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  height: 12rem;
  width: 20rem;

  @media screen and (max-width: 850px) {
    width: 15rem;
  }
  @media screen and (max-width: 550px) {
  }
`;

export const SubFooterContent = styled.div`
  width: 100%;
  padding: 0 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.background.bold};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SubFooterLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  span {
    color: ${({ theme }) => theme.text.light};
  }

  svg {
    height: 2rem;
    width: auto;
  }
`;

export const SubFooterButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const SubFooterButton = styled.a<ISubFooterButtonProps>`
  width: 2.5rem;
  height: 2.5rem;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0.5rem;
  background: ${({ theme, isFill }) =>
    isFill ? theme.background.primary : theme.background.light};

  svg {
    transition: all 0.2s ease-in-out;

    color: ${({ theme, isFill }) =>
      isFill ? theme.text.bold : theme.text.primary};
  }

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    ${({ isFill, theme }) =>
      isFill &&
      css`
        background: ${theme.background.primary_hover};
      `}
    svg {
      color: ${({ theme, isFill }) =>
        !isFill && theme.background.primary_hover};
    }
  }
`;
