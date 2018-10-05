import React, { Component } from 'react';
import "./App.scss";

import Header from './components/Header/Header';
import MainHeader from './components/MainHero/MainHero';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from "./components/Projects/Projects";
import { backgroundIcons, projectInformation } from "./assets/json/portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundIcons,
      projectInformation
    }
  }
  render() {
    return (
      <div>
        <Header />
        <MainHeader />
        <AboutMe />
        <Projects backgroundIcons={this.state.backgroundIcons} projectInformation={this.state.projectInformation} />
      </div>
    );
  }
}

export default App;
