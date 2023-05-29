import styled from 'styled-components';

export const QuestionsContainer = styled.section`
  width: 100%;
  padding: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 2rem 0 4rem 0;
  }

  @media screen and (max-width: 850px) {
    padding: 2rem;
  }
`;

export const QuestionAccordionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
