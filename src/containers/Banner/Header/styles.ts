import Link from 'next/link';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;

  width: 100%;
  z-index: 100;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-container {
    svg {
      height: 4rem;
      width: auto;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 2rem;

    .logo-container {
      svg {
        height: 3rem;
      }
    }
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const NavItem = styled(Link)`
  color: ${({ theme }) => theme.nav_items.color};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  position: relative;

  &::after {
    transition: all 0.3s ease-in-out;
    content: '';
    width: 0%;
    height: 2px;
    border-radius: 5px;
    position: absolute;
    bottom: -0.25rem;
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.nav_items.underline};
  }

  &:hover {
    &::after {
      width: 85%;
    }
  }
`;

export const SidebarToggle = styled.button`
  display: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background: ${({ theme }) => theme.background.primary};
  border-radius: 0.5rem;
  svg {
    color: ${({ theme }) => theme.text.bold};
  }

  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
