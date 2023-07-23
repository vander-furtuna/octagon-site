import styled from 'styled-components';

export const SubtitleContainer = styled.h2`
    font-size: 2rem;

    color: ${({ theme }) => theme.title.color.primary};
    position: relative;
    text-align: left;

    width: fit-content;
    @media screen and (max-width: 600px) {
        font-size: 1.5rem;
    }
`;
