import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 22.5rem;
  background-color: ${({ theme }) => theme.background.black};
`;

export const FooterContent = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  padding: 4rem;
  align-items: center;
  justify-content: space-between;
`;

export const FooterInformations = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterNav = styled.ul`
  strong {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text.primary};
  }
  li {
    list-style: none;

    a {
      font-size: 1rem;
      color: ${({ theme }) => theme.text.light};
      text-decoration: none;
    }
  }
`;

export const FooterMap = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  max-height: 12rem;
`;

export const SubFooterContent = styled.div`
  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.background.bold};
`;
