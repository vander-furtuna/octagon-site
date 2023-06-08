import styled from 'styled-components';

export const AboutUsContainer = styled.section`
  width: 100%;
  padding: 4rem 8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 4rem 0;
  }

  .informations {
    display: flex;
  }

  @media screen and (max-width: 750px) {
    .informations {
      flex-direction: column-reverse;
    }
  }
  @media screen and (max-width: 500px) {
    padding: 2rem;
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
    .title {
      margin: 0;
      color: ${({ theme }) => theme.text.primary};
      font-size: 1.5rem;
      /* padding: 1rem 0; */
    }
    .description {
      color: ${({ theme }) => theme.text.light};
      font-size: 1.1rem;
    }
  }
`;

export const AboutUsLogoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
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
      right: -50%;
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
