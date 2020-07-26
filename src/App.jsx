import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/themes/defaultTheme';
import GlobalStyle from './styles/global';
import DeafaultLayout from './layouts/defaultLayout/DefaultLayout';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <DeafaultLayout>
        Thalles Bueno
      </DeafaultLayout>
    </ThemeProvider>
  );
}

export default App;
