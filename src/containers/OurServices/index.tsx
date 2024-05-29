'use client'

import { Title } from '@/components/Title'
import { iconsData } from '@/data/ourservices/iconsData'
import { serviceData } from '@/data/ourservices/servicesData'

import { ServiceCard } from './ServiceCard'
import { ServiceIconCard } from './ServiceIconCard'
import {
  OurServicesContainer,
  ServicesCardContainer,
  ServicesContent,
  ServicesIconsContainer,
} from './styles'

export function OurServices() {
  return (
    <OurServicesContainer id="servicos">
      <header>
        <Title>Nossos Serviços</Title>
      </header>
      <ServicesContent>
        <ServicesIconsContainer>
          {iconsData.map((icon) => (
            <ServiceIconCard key={icon.title} icon={icon} />
          ))}
        </ServicesIconsContainer>
        <ServicesCardContainer>
          {serviceData.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </ServicesCardContainer>
      </ServicesContent>
    </OurServicesContainer>
  )
}
