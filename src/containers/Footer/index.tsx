import { OctagonFooterLogo } from '@/assets/images/octagon-footer';
import {
  FooterContainer,
  FooterContent,
  FooterInformations,
  FooterMap,
  FooterNav,
  SubFooterContent,
} from './styles';
import { NavItems } from '@/data/header/navItems';

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <OctagonFooterLogo />
        <FooterInformations>
          <FooterMap>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.53090783469!2d-40.35749652583088!3d-3.693565042994241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7eac6fb552c0d43%3A0x655948203c72307a!2sUniversidade%20Federal%20do%20Cear%C3%A1%20%E2%80%93%20Campus%20de%20Sobral!5e0!3m2!1spt-PT!2sbr!4v1685369515508!5m2!1spt-PT!2sbr"
              style={{ border: 0, margin: 0, width: '100%', height: '100%' }}
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
      </FooterContent>
      <SubFooterContent></SubFooterContent>
    </FooterContainer>
  );
}
