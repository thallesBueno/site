import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/themes/defaultTheme';
import GlobalStyle from './styles/global';
import DeafaultLayout from './layouts/defaultLayout/DefaultLayout';

import HomePage from './pages/home/Home';
import AboutMePage from './pages/aboutMe/AboutMe';
import ProjectsPage from './pages/projects/Projects';
import ContactPage from './pages/contact/Contact';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <DeafaultLayout>
        <HomePage />
        <AboutMePage />
        <ProjectsPage />
        <ContactPage />
      </DeafaultLayout>
    </ThemeProvider>
  );
}

export default App;
