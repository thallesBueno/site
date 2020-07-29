import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/themes/defaultTheme';
import GlobalStyle from './styles/global';
import DeafaultLayout from './layouts/defaultLayout/DefaultLayout';
import HomePage from './pages/home/Home';
import AboutMePage from './pages/aboutMe/AboutMe';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <DeafaultLayout>
        <HomePage />
        <AboutMePage />
        <HomePage />
      </DeafaultLayout>
    </ThemeProvider>
  );
}

export default App;
