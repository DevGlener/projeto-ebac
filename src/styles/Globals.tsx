import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    width: 100%;
    .container {
      width: 64rem;
      margin: 0 auto;
    }
  }
`;

export default GlobalStyle;
