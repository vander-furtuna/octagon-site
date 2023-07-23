import styled from 'styled-components';

export const QuestionsContainer = styled.section`
    width: 100%;
    padding: 4rem 8rem;
    gap: 2rem;

    display: grid;
    grid-template-columns: 1fr 1.5fr;

    header {
        display: flex;
        gap: 2rem;
        flex-direction: column;

        .subtitle {
            font-family: ${({ theme }) => theme.font.title};
            font-size: 1.5rem;
            color: ${({ theme }) => theme.text.light};
        }
    }

    @media screen and (max-width: 1100px) {
        padding: 4rem;
        grid-template-columns: 1fr 2fr;
    }

    @media screen and (max-width: 900px) {
        padding: 6rem 2rem;
        display: flex;
        flex-direction: column;
    }
`;

export const QuestionAccordionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const WhatsAppCard = styled.div`
    width: 100%;
    max-width: 50rem;
    height: 6rem;
    padding: 0.5rem 1.5rem;
    background: ${({ theme }) =>
        `linear-gradient(180deg, ${theme.background.light} 0%, ${theme.background.thin} 100%)`};
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid ${({ theme }) => theme.outline.light};

    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        padding: 0;
        margin: 0;
        font-size: 1rem;
        color: ${({ theme }) => theme.text.light};
    }
    span {
        font-size: 0.75rem;
        color: ${({ theme }) => theme.text.light};
    }

    @media screen and (max-width: 650px) {
        display: grid;
        height: fit-content;
        padding: 1.5rem;
        gap: 1rem;
        grid-template:
            'icon content'
            'button button';

        .icon {
            grid-area: icon;
        }
        .content {
            grid-area: content;
        }
        .button {
            grid-area: button;
            width: 100%;
        }
    }
`;
