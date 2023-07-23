import { Subtitle } from '@/components/Subtitle';
import {
    ServiceCardButton,
    ServiceCardContainer,
    ServiceCardContent,
    ServiceCardImage,
    ServiceList,
    ServiceListOption,
} from './styles';
import { Button } from '@/components/buttons/Button';
import { IService } from '@/dtos/IService';
import { CaretRight } from '@phosphor-icons/react';
import Image from 'next/image';

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
                        <ServiceListOption
                            key={option}
                        >{`• ${option}`}</ServiceListOption>
                    ))}
                </ServiceList>
                <ServiceCardButton>
                    <Button
                        Icon={<CaretRight size={20} weight="bold" />}
                        href={button.url}
                        isExternalLink
                        iconPosition="right"
                    >
                        {button.label}
                    </Button>
                </ServiceCardButton>
            </ServiceCardContent>
            <ServiceCardImage>
                <Image
                    src={image_url}
                    alt={`Imagem de ${title}`}
                    style={{ objectFit: 'cover' }}
                    fill
                />
            </ServiceCardImage>
        </ServiceCardContainer>
    );
}
