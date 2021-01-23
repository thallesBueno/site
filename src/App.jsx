import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import lightTheme from './styles/themes/lightTheme';
import darkTheme from './styles/themes/darkTheme';

import DeafaultLayout from './layouts/defaultLayout/DefaultLayout';
import HomePage from './pages/home/Home';
import AboutMePage from './pages/aboutMe/AboutMe';
import ProjectsPage from './pages/projects/Projects';
import ContactPage from './pages/contact/Contact';
import SkillsPage from './pages/skills/Skills';

import ThemeSwitch from './components/themeSwitch/ThemeSwitch';

import usePersistedState from './utils/hooks/useTheme';

const App = () => {
  const [theme, setTheme] = usePersistedState('theme', darkTheme);

  const handleThemeSwitch = () => setTheme((oldTheme) => (oldTheme.name === 'light' ? darkTheme : lightTheme));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DeafaultLayout>
        <ThemeSwitch onClick={handleThemeSwitch} />
        <HomePage />
        <AboutMePage />
        <SkillsPage />
        <ProjectsPage />
        <ContactPage />
      </DeafaultLayout>
    </ThemeProvider>
  );
};

export default App;
