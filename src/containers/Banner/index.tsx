'use client';
import BannerImageUrl from '@/assets/images/banner/banner.jpg';

import {
    BannerContainer,
    BannerImage,
    BannerMessage,
    BannerOverlay,
} from './styles';
import { Header } from './Header';
import { Button } from '@/components/buttons/Button';
import { CaretRight } from '@phosphor-icons/react';

export function Banner() {
    return (
        <BannerContainer id="home">
            <Header />

            <BannerMessage>
                <h1>
                    Transforme <strong>ideias</strong> em{' '}
                    <strong>realidade</strong> mude o mundo com{' '}
                    <strong>engenharia</strong>
                </h1>
            </BannerMessage>
            <Button>
                Saiba mais <CaretRight size={20} weight="bold" />
            </Button>

            <BannerOverlay />
            <BannerImage src={BannerImageUrl.src} />
        </BannerContainer>
    );
}
