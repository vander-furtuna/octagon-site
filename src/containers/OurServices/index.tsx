'use client';

import { Title } from '@/components/Title';
import { OurServicesContainer, ServicesIconsContainer } from './styles';
import { iconsData } from '@/data/ourservices/iconsData';
import { ServiceIconCard } from './ServiceIconCard';

export function OurServices() {
  return (
    <OurServicesContainer>
      <header>
        <Title>Nossos Serviços</Title>
      </header>
      <ServicesIconsContainer>
        {iconsData.map((icon, index) => (
          <ServiceIconCard
            key={icon.title}
            Icon={icon.Icon}
            title={icon.title}
          />
        ))}
      </ServicesIconsContainer>
    </OurServicesContainer>
  );
}
