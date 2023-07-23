'use client';

import { OctagonLogo } from '@/assets/images/banner/octagon-logo';
import {
    HeaderContainer,
    HeaderContent,
    NavContainer,
    NavItem,
    SidebarToggle,
} from './styles';
import { NavItems } from '@/data/header/navItems';
import { Button } from '@/components/buttons/Button';
import { List, Phone } from '@phosphor-icons/react';
import { useSidebar } from '@/hooks/sidebar';

export function Header() {
    const { toggleSidebar, isSidebarOpen } = useSidebar();

    return (
        <HeaderContainer>
            <HeaderContent>
                <div className="logo-container">
                    <OctagonLogo />
                </div>
                <NavContainer>
                    {NavItems.map((item) => (
                        <NavItem href={item.id} key={item.label}>
                            {item.label}
                        </NavItem>
                    ))}
                    <Button
                        href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
                        isExternalLink
                        Icon={<Phone weight="bold" />}
                    >
                        Contato
                    </Button>
                </NavContainer>
                <SidebarToggle onClick={toggleSidebar}>
                    <List size={24} weight="bold" />
                </SidebarToggle>
            </HeaderContent>
        </HeaderContainer>
    );
}
