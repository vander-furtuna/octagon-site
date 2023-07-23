import styled from 'styled-components';

export const OurServicesContainer = styled.section`
    width: 100%;
    padding: 6rem 4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 650px) {
        padding: 6rem 2rem;
    }
`;

export const ServicesContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
`;

export const ServicesIconsContainer = styled.div`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const ServicesCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 2.5rem;
`;
