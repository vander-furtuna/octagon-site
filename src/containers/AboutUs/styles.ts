import styled from 'styled-components';

export const AboutUsContainer = styled.section`
    width: 100%;
    padding: 8rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.background.primary.normal};

    header {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0 4rem 0;
    }

    .informations {
        display: flex;
    }

    @media screen and (max-width: 750px) {
        padding: 4rem;
        .informations {
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
        }
    }
    @media screen and (max-width: 500px) {
        padding: 6rem 2rem;
    }
`;

export const AboutUsContent = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .topic {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        h2 {
            margin: 0;
            color: ${({ theme }) => theme.title.color.bold};
            text-transform: uppercase;
            position: relative;
            font-size: 1.75rem;
            /* padding: 1rem 0; */
            .title-icon {
                position: absolute;
                left: -2.5rem;
                top: 50%;
                transform: translateY(-50%);
            }
        }
        .description {
            p {
                color: ${({ theme }) => theme.text.bold};
                font-size: 1.1rem;
            }
        }
    }

    @media screen and (max-width: 500px) {
        .topic {
            h2 {
                font-size: 1.5rem;
                .title-icon {
                    left: -1.95rem;
                }
            }
            .description {
                text-align: justify;
            }
        }
    }
`;

export const AboutUsLogoContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 55%;
    max-height: 100%;
    position: relative;

    svg {
        top: 50%;
        transform: translateY(-50%);
        height: 27.5rem;
        width: auto;
        position: absolute;
    }

    @media screen and (max-width: 1500px) {
        svg {
            right: -75%;
        }
    }

    @media screen and (max-width: 850px) {
        svg {
            right: -80%;
        }
    }

    @media screen and (max-width: 750px) {
        justify-content: center;
        svg {
            position: relative;
            transform: translateY(0);
            right: 0;
            width: 17.5rem;
            height: auto;

            margin-bottom: 4rem;
        }
    }
`;
