import styled from 'styled-components';
import { transparentize } from 'polished';
export const BannerContainer = styled.section`
    width: 100%;
    height: 40rem;
    position: relative;
    background: transparent;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
`;

export const BannerImage = styled.img`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const BannerMessage = styled.div`
    /* position: absolute; */
    z-index: 2;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 4rem;

    h1 {
        display: block;
        width: 100%;
        padding: 2rem;
        max-width: 46rem;

        font-weight: 700;
        font-size: 2.75rem;
        text-align: center;
        color: ${({ theme }) => theme.text.light};

        strong {
            color: ${({ theme }) => theme.text.primary};
        }
    }

    @media screen and (max-width: 750px) {
        h1 {
            font-size: 1.75rem;
        }
    }

    /* @media screen and (max-width: 600px) {
        h1 {
            font-size: 1.25rem;
        }
    } */
`;

export const BannerOverlay = styled.div`
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
        `linear-gradient(to bottom, ${transparentize(
            0.8,
            theme.background.bold,
        )} 0%, ${theme.background.bold} 100%)`};
`;
