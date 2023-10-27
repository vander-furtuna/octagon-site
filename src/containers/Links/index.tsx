import { Title } from '@/components/Title';
import { OctagonAboutUsLogo } from '@/assets/images/banner/octagon-aboutus';
import {
    ButtonsContainer,
    LinksContainer,
    LogoContainer,
    TitleContainer,
} from './styles';
import { Button } from '@/components/buttons/Button';

export function Links() {
    return (
        <LinksContainer>
            <LogoContainer>
                <TitleContainer>
                    <Title>Links</Title>
                </TitleContainer>
                <figure>
                    <OctagonAboutUsLogo color="primary" />
                </figure>
            </LogoContainer>
            <ButtonsContainer>
                <Button Icon={<OctagonAboutUsLogo color="dark" />}>Site</Button>
            </ButtonsContainer>
        </LinksContainer>
    );
}
