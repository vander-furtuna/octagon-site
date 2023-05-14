'use client';

import { OctagonLogo } from '@/assets/images/banner/octagon-logo';
import {
  HeaderContainer,
  NavContainer,
  NavItem,
  SidebarToggle,
} from './styles';
import { NavItems } from '@/data/header/navItems';
import { Button } from '@/components/buttons/Button';
import { List } from '@phosphor-icons/react';
import { useSidebar } from '@/hooks/sidebar';

export function Header() {
  const { toggleSidebar, isSidebarOpen } = useSidebar();

  return (
    <HeaderContainer>
      <div className="logo-container">
        <OctagonLogo />
      </div>
      <NavContainer>
        {NavItems.map((item) => (
          <NavItem href={item.id} key={item.label}>
            {item.label}
          </NavItem>
        ))}
        <Button>Contato</Button>
      </NavContainer>
      <SidebarToggle onClick={toggleSidebar}>
        <List size={24} weight="bold" />
      </SidebarToggle>
    </HeaderContainer>
  );
}
