import styled from 'styled-components';

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
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
    top: 10rem;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1;
`;
