import styled from 'styled-components';

import bannerImage from '@/assets/images/banner/banner.jpg';
import { transparentize } from 'polished';

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    width: 100%;

    background: url(${bannerImage.src}) no-repeat center center;
`;

export const LinksContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background: ${({ theme }) => transparentize(0.2, theme.background.black)};
    backdrop-filter: blur(10px);
    height: 100%;
    width: 100%;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    justify-content: center;
    align-items: center;
    flex: 1;

    figure {
        svg {
            width: 25rem;
            height: auto;
        }
    }
`;

export const TitleContainer = styled.div`
    position: absolute;
    top: 8%;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 2rem;

    justify-content: center;
    align-items: center;
    flex: 1;

    button {
        min-width: 30rem;
    }
`;
