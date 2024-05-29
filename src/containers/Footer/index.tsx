import {
  CaretUp,
  GithubLogo,
  InstagramLogo,
  List,
  MapPin,
} from '@phosphor-icons/react'

import { OctagonFooterLogo } from '@/assets/images/octagon-footer'
import { VanderSuncatLogo } from '@/assets/images/vander-logo'
import { NavItems } from '@/data/header/navItems'
import { useSidebar } from '@/hooks/sidebar'

import {
  FooterContainer,
  FooterContent,
  FooterInformations,
  FooterMap,
  FooterMobileButton,
  FooterMobileButtonsContainer,
  FooterNav,
  SubFooterButton,
  SubFooterButtons,
  SubFooterContent,
  SubFooterLogoContainer,
} from './styles'

export function Footer() {
  const { toggleSidebar } = useSidebar()

  return (
    <FooterContainer>
      <FooterContent>
        <OctagonFooterLogo id="logo" />
        <FooterInformations>
          <FooterMap>
            <iframe
              src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.53090783469!2d-40.35749652583088!3d-3.693565042994241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7eac6fb552c0d43%3A0x655948203c72307a!2sUniversidade%20Federal%20do%20Cear%C3%A1%20%E2%80%93%20Campus%20de%20Sobral!5e0!3m2!1spt-PT!2sbr!4v1685369515508!5m2!1spt-PT!2sbr"
              style={{
                border: 0,
                margin: 0,
                width: '100%',
                height: '100%',
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </FooterMap>
          <FooterNav>
            <strong>Acesso Rápido</strong>
            {NavItems.map((item) => (
              <li key={item.id}>
                <a href={item.id}>{`• ${item.label}`}</a>
              </li>
            ))}
          </FooterNav>
        </FooterInformations>
        <FooterMobileButtonsContainer>
          <FooterMobileButton
            href="https://goo.gl/maps/ogoc7tSstk5LupUR8"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin weight="fill" size={32} />
          </FooterMobileButton>
          <FooterMobileButton onClick={toggleSidebar}>
            <List size={32} weight="bold" />
          </FooterMobileButton>
          <FooterMobileButton href="#home">
            <CaretUp weight="bold" size={32} />
          </FooterMobileButton>
        </FooterMobileButtonsContainer>
      </FooterContent>
      <SubFooterContent>
        <SubFooterLogoContainer>
          <span>Desenvolvido por</span>
          <VanderSuncatLogo />
        </SubFooterLogoContainer>
        <SubFooterButtons>
          <SubFooterButton
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/vander_suncat?igshid=ZDc4ODBmNjlmNQ=="
          >
            <InstagramLogo weight="fill" size={24} />
          </SubFooterButton>
          <SubFooterButton
            target="_blank"
            rel="noreferrer"
            href="https://github.com/vander115"
          >
            <GithubLogo weight="fill" size={24} />
          </SubFooterButton>
          <SubFooterButton isFill id="top" href="#home">
            <CaretUp weight="bold" size={24} />
          </SubFooterButton>
        </SubFooterButtons>
      </SubFooterContent>
    </FooterContainer>
  )
}
