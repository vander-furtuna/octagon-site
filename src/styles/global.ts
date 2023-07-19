import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
  }

  h1 {
    font-family: 'Bai Jamjuree', sans-serif;
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

  input, button, textarea {
    border: none;
    outline: none;
    background-color: transparent;
    font-family: 'Inter', sans-serif;
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
  background: ${({ theme }) => theme.background.primary};
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) => theme.background.primary_hover};
}
`;
