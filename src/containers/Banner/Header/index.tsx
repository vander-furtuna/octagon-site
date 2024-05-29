import { Phone } from '@phosphor-icons/react'

import { OctagonLogo } from '@/assets/images/banner/octagon-logo'
import { Button } from '@/components/buttons/Button'
import { NavItems } from '@/data/header/navItems'

import { SidebarToggle } from './SidebarToggle'
import { HeaderContainer, HeaderContent, NavContainer, NavItem } from './styles'

export function Header() {
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
        <SidebarToggle />
      </HeaderContent>
    </HeaderContainer>
  )
}
