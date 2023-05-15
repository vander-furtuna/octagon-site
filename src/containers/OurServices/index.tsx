"use client";

import { Title } from "@/components/Title";
import {
  OurServicesContainer,
  ServicesCardContainer,
  ServicesContent,
  ServicesIconsContainer,
} from "./styles";
import { iconsData } from "@/data/ourservices/iconsData";
import { ServiceIconCard } from "./ServiceIconCard";
import { serviceData } from "@/data/ourservices/servicesData";
import { ServiceCard } from "./ServiceCard";

export function OurServices() {
  return (
    <OurServicesContainer>
      <header>
        <Title>Nossos Serviços</Title>
      </header>
      <ServicesContent>
        <ServicesIconsContainer>
          {iconsData.map((icon) => (
            <ServiceIconCard
              key={icon.title}
              Icon={icon.Icon}
              title={icon.title}
              href={icon.href}
            />
          ))}
        </ServicesIconsContainer>
        <ServicesCardContainer>
          {serviceData.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </ServicesCardContainer>
      </ServicesContent>
    </OurServicesContainer>
  );
}
