import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Element } from 'react-scroll';
import { Helmet } from 'react-helmet';

import GlobalStyle from './styles/global';
import lightTheme from './styles/themes/lightTheme';
import darkTheme from './styles/themes/darkTheme';

import DeafaultLayout from './layouts/defaultLayout/DefaultLayout';
import HomePage from './pages/home/Home';
import AboutMePage from './pages/aboutMe/AboutMe';
import SkillsPage from './pages/skills/Skills';
// import ProjectsPage from './pages/projects/Projects';
import ContactPage from './pages/contact/Contact';

import ThemeSwitch from './components/themeSwitch/ThemeSwitch';
import LateralNavBar from './components/lateralNavbar/LateralNavBar';

import usePersistedState from './utils/hooks/usePersistedState';

const pages = [
  {
    element: <HomePage />,
    pageId: 'homePage',
    pageName: 'início',
  },
  {
    element: <AboutMePage />,
    pageId: 'aboutMePage',
    pageName: 'sobre mim',
  },
  {
    element: <SkillsPage />,
    pageId: 'skillsPage',
    pageName: 'habilidades',
  },
  {
    element: <ContactPage />,
    pageId: 'contactPage',
    pageName: 'contatos',
  },
];

const App = () => {
  const [actualTheme, setTheme] = usePersistedState('theme', darkTheme);

  const handleThemeSwitch = () => {
    if (actualTheme.name === lightTheme.name) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <ThemeProvider theme={actualTheme}>
      <Helmet>
        <link rel="icon" href={actualTheme.favicon} />
      </Helmet>
      <GlobalStyle />
      <DeafaultLayout>
        <ThemeSwitch onClick={handleThemeSwitch} />
        <LateralNavBar pages={pages} />
        {pages.map((page) => (
          <Element name={page.pageId} key={page.pageId}>
            {page.element}
          </Element>
        ))}
      </DeafaultLayout>
    </ThemeProvider>
  );
};

export default App;
