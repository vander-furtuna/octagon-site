import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;

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
    font-family: 'Montserrat', sans-serif;
  }
`;
