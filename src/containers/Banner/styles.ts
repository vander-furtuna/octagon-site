import styled from 'styled-components';

interface BannerProps {
  background: string;
}

export const BannerContainer = styled.section<BannerProps>`
  width: 100%;
  height: 40rem;
  position: relative;

  background: url(${({ background }) => background}) no-repeat center;

  .message {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    span {
      display: block;
      width: 45rem;

      font-weight: 700;
      font-size: 2.5rem;
      text-align: center;
      color: ${({ theme }) => theme.text.light};

      strong {
        color: ${({ theme }) => theme.text.primary};
      }
    }
  }

  .overlay {
    width: 100%;
    height: 100%;

    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.background.bold} 0%,
      transparent 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  @media screen and (max-width: 750px) {
    .message {
      span {
        width: 35rem;
        font-size: 2rem;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .message {
      span {
        width: 21.5rem;
        font-size: 1.25rem;
      }
    }
  }
`;
