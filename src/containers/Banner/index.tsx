'use client'

import BannerImageUrl from '@/assets/images/banner/banner.jpg'
import { Button } from '@/components/buttons/Button'

import { Header } from './Header'
import {
  BannerContainer,
  BannerImage,
  BannerMessage,
  BannerOverlay,
} from './styles'

export function Banner() {
  return (
    <BannerContainer id="home">
      <Header />

      <BannerMessage>
        <h1>
          Transforme <strong>ideias</strong> em <strong>realidade</strong> mude
          o mundo com <strong>engenharia</strong>
        </h1>
      </BannerMessage>
      <Button icon="ChevronRight" iconPosition="right" href="#servicos">
        Saiba mais
      </Button>

      <BannerOverlay />
      <BannerImage src={BannerImageUrl.src} />
    </BannerContainer>
  )
}
