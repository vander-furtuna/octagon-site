'use client';
import BannerImage from '@/assets/images/banner/banner.jpg';

import { BannerContainer } from './styles';
import { Header } from './Header';

export function Banner() {
  return (
    <BannerContainer background={BannerImage.src} id="home">
      <Header />
      <div className="message">
        <span>
          Transforme <strong>ideias</strong> em <strong>realidade</strong> mude
          o mundo com <strong>engenharia</strong>
        </span>
      </div>
      <div className="overlay" />
    </BannerContainer>
  );
}
