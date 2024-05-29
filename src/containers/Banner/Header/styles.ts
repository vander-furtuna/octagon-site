import Link from 'next/link'
import { transparentize } from 'polished'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 3rem 4rem;

  @media screen and (max-width: 550px) {
    padding: 2rem 3rem;
  }
  @media screen and (max-width: 500px) {
    padding: 2rem 1rem;
  }
`

export const HeaderContent = styled.div`
  position: relative;

  width: 100%;
  height: 5.5rem;
  padding: 1rem 2rem;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => transparentize(0.4, theme.background.bold)};
  border-radius: ${({ theme }) => theme.borderRadius};
  backdrop-filter: blur(10px);

  .logo-container {
    height: 100%;
    display: flex;
    align-items: center;
    svg {
      height: 100%;
      width: auto;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0.5rem 1.5rem;

    .logo-container {
      svg {
        height: 3rem;
      }
    }
  }
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`

export const NavItem = styled(Link)`
  color: ${({ theme }) => theme.navItems.color};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  position: relative;
  font-size: 0.9rem;

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
    background: ${({ theme }) => theme.navItems.underline};
  }

  &:hover {
    &::after {
      width: 85%;
    }
  }
`

export const SidebarToggleContainer = styled.button`
  display: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background: ${({ theme }) => theme.background.primary.normal};
  border-radius: ${({ theme }) => theme.borderRadius};
  svg {
    color: ${({ theme }) => theme.text.bold};
  }

  @media screen and (max-width: 1100px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`
