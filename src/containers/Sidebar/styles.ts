import Link from 'next/link';
import styled from 'styled-components';

interface ISidebarProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.aside<ISidebarProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  z-index: ${({ isOpen }) => (isOpen ? '200' : '-1')};
`;

export const SidebarOverlay = styled.div<ISidebarProps>`
  transition: all 0.3s ease;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`;

export const SidebarContent = styled.div<ISidebarProps>`
  transition: all 0.2s ease-in-out;

  position: absolute;
  padding: 2rem;
  width: 20rem;
  height: 100%;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 1rem 0 0 1rem;

  background: ${({ theme }) => theme.background.bold};
`;

export const SidebarHeader = styled.header`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .close {
    svg {
      color: ${({ theme }) => theme.title.underline};
    }
  }
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`;

export const SidebarNavItem = styled(Link)`
  color: ${({ theme }) => theme.nav_items.color};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  position: relative;
  font-size: 1.25rem;
  z-index: 210;

  &::after {
    transition: all 0.3s ease-in-out;
    content: '';
    z-index: -1;
    width: 0;
    height: calc(100% + 1rem);
    border-radius: 20rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${({ theme }) => theme.background.light};
  }

  &:hover {
    &::after {
      width: 130%;
    }
  }
`;

export const SidebarFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`;
