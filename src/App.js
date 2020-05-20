import React, { Fragment, useEffect } from 'react';
import ReactGA from 'react-ga';
import './App.scss';
import Header from './components/Header/Header';
import MainHeader from './components/MainHero/MainHero';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import {
  backgroundIcons,
  projectInformation,
  mainHeroIcons,
  challenges,
} from './assets/json/portfolio';

const App = () => {
  useEffect(() => {
    // initalizing Google Analytics
    ReactGA.initialize('UA-166793173-1');
  }, [])

  const scrollIntoThisDiv = (id) => {
    const divToScrollInto = document.getElementById(`${id}`);
    divToScrollInto.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Fragment>
      <Header scrollIntoThisDiv={scrollIntoThisDiv} />
      <main>
        <MainHeader
          mainHeroIcons={mainHeroIcons}
          scrollIntoThisDiv={scrollIntoThisDiv}
        />
        <Projects
          backgroundIcons={backgroundIcons}
          projectInformation={projectInformation}
          challenges={challenges}
        />
        <AboutMe />
        <Contact />
      </main>
    </Fragment>
  );
}

export default App;
