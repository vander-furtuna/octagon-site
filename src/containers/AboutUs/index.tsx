import { Title } from '@/components/Title';
import {
    AboutUsContainer,
    AboutUsContent,
    AboutUsLogoContainer,
} from './styles';
import { aboutUsData } from '@/data/aboutus/aboutUsData';
import { OctagonAboutUsLogo } from '@/assets/images/banner/octagon-aboutus';

export function AboutUs() {
    return (
        <AboutUsContainer>
            <header>
                <Title>Sobre a Octagon</Title>
            </header>

            <div className="informations">
                <AboutUsContent>
                    {aboutUsData.map((topic) => (
                        <div className="topic" key={topic.title}>
                            <strong className="title">{topic.title}</strong>
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
