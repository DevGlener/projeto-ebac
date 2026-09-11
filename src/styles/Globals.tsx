import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    max-width: 1366px;
    width: 100%;
    list-style: none;
    .container {
      margin: 0 auto;
    }
  }
`;

export default GlobalStyle;
