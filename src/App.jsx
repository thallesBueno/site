import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/themes/defaultTheme';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div>
        Thalles Bueno
      </div>
    </ThemeProvider>
  );
}

export default App;
