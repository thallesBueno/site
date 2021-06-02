import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, html, body, #root {
    font-family: 'Montserrat', sans-serif;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.textColor};
    transition-timing-function: ease-in-out;
    transition: color ${({ theme }) => theme.transitionDuration}, background-color ${({ theme }) => theme.transitionDuration};
    -ms-overflow-style: none;

    scrollbar-width: none; 

    &::-webkit-scrollbar {
      display: none;
    }

    &::selection {
    color: ${({ theme }) => theme.colors.mainColor};
    background: ${({ theme }) => theme.colors.textColor};
  }
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }
  
`;
