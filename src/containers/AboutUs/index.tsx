import { Title } from '@/components/Title';
import {
    AboutUsContainer,
    AboutUsContent,
    AboutUsLogoContainer,
} from './styles';
import { aboutUsData } from '@/data/aboutus/aboutUsData';
import { OctagonAboutUsLogo } from '@/assets/images/banner/octagon-aboutus';
import { CaretRight } from '@phosphor-icons/react';

export function AboutUs() {
    return (
        <AboutUsContainer id="sobre">
            <header>
                <Title variant="dark">Sobre a Octagon</Title>
            </header>

            <div className="informations">
                <AboutUsContent>
                    {aboutUsData.map((topic) => (
                        <div className="topic" key={topic.title}>
                            <h2>
                                <CaretRight
                                    weight="bold"
                                    className="title-icon"
                                />
                                {topic.title}
                            </h2>
                            <span className="description">
                                {topic.description}
                            </span>
                        </div>
                    ))}
                </AboutUsContent>
                <AboutUsLogoContainer>
                    <OctagonAboutUsLogo />
                </AboutUsLogoContainer>
            </div>
        </AboutUsContainer>
    );
}
