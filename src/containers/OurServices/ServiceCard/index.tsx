import { Subtitle } from "@/components/Subtitle";
import {
  ServiceCardButton,
  ServiceCardContainer,
  ServiceCardContent,
  ServiceCardImage,
  ServiceList,
  ServiceListOption,
} from "./styles";
import { Button } from "@/components/buttons/Button";
import { IService } from "@/dtos/IService";

interface IServiceCardProps {
  service: IService;
}

export function ServiceCard({
  service: { title, options, button, image_url, href_id },
}: IServiceCardProps) {
  return (
    <ServiceCardContainer id={href_id}>
      <ServiceCardContent>
        <Subtitle>{title}</Subtitle>
        <ServiceList>
          {options.map((option) => (
            <ServiceListOption key={option}>{`• ${option}`}</ServiceListOption>
          ))}
        </ServiceList>
        <ServiceCardButton>
          <Button>{button.label}</Button>
        </ServiceCardButton>
      </ServiceCardContent>
      <ServiceCardImage image_url={image_url} />
    </ServiceCardContainer>
  );
}
