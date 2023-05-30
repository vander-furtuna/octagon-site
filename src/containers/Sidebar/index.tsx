'use client';

import { X } from '@phosphor-icons/react';

import {
  SidebarContainer,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
  SidebarOverlay,
} from './styles';
import { NavItems } from '@/data/header/navItems';
import { Button } from '@/components/buttons/Button';
import { useSidebar } from '@/hooks/sidebar';

export function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <SidebarContainer isOpen={isSidebarOpen}>
      <SidebarOverlay isOpen={isSidebarOpen} />
      <SidebarContent isOpen={isSidebarOpen}>
        <SidebarHeader>
          <button className="close" onClick={toggleSidebar}>
            <X size={24} weight="bold" />
          </button>
        </SidebarHeader>
        <SidebarNav>
          {NavItems.map((item) => (
            <SidebarNavItem href={item.id} key={item.id}>
              {item.label}
            </SidebarNavItem>
          ))}
        </SidebarNav>
        <SidebarFooter>
          <Button>Contato</Button>
        </SidebarFooter>
      </SidebarContent>
    </SidebarContainer>
  );
}
