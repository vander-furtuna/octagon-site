import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.background.bold};
  }

  input, button, textarea {
    border: none;
    outline: none;
    background-color: transparent;
    font-family: 'Montserrat', sans-serif;
  }
`;
