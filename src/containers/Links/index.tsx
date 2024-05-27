import { Title } from '@/components/Title';
import { OctagonAboutUsLogo } from '@/assets/images/banner/octagon-aboutus';
import {
    ButtonsContainer,
    LinksContainer,
    LinksContent,
    LogoContainer,
    TitleContainer,
} from './styles';
import { linkButtonsData } from '@/data/links/linkButtonsData';
import { Button } from '@/components/buttons/Button';

export function Links() {
    return (
        <LinksContainer>
            <LinksContent>
                <LogoContainer>
                    <TitleContainer>
                        <Title>Links</Title>
                    </TitleContainer>
                    <figure>
                        <OctagonAboutUsLogo color="primary" />
                    </figure>
                </LogoContainer>
                <ButtonsContainer>
                    {linkButtonsData.map(({ Icon, link, label }, index) => (
                        <Button key={index} Icon={Icon} href={link}>
                            {label}
                        </Button>
                    ))}
                </ButtonsContainer>
            </LinksContent>
        </LinksContainer>
    );
}
