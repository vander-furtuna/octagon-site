import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.text};
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.background.bold};
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.font.title};
  }

  input, button, textarea {
    border: none;
    outline: none;
    background-color: transparent;
    font-family: ${({ theme }) => theme.font.text};
    font-weight: 400;
  }

  /* width */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.background.bold};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.background.primary.normal};
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) => theme.background.primary.light};
}
`;
