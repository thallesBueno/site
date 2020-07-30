import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, html, body, #root {
    font-family: 'Montserrat', sans-serif;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.textColor};
    transition-timing-function: ease-in-out;
    transition: color 1s, background-color 1s;
  }
  
`;
