import React, { Component } from 'react';
import "./App.scss";

import Header from './components/Header/Header';
import MainHeader from './components/MainHero/MainHero';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { backgroundIcons, projectInformation, mainHeroIcons } from "./assets/json/portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundIcons,
      projectInformation,
      mainHeroIcons
    }
  }

   scrollIntoThisDiv = (id) => {
    const divToScrollInto = document.getElementById(`${id}`);
    divToScrollInto.scrollIntoView({behavior: "smooth" , block: "start"});
}
  render() {


    return (
      <div>
        <Header scrollIntoThisDiv={this.scrollIntoThisDiv}/>
        <MainHeader mainHeroIcons={this.state.mainHeroIcons} scrollIntoThisDiv={this.scrollIntoThisDiv}/>
        <Projects backgroundIcons={this.state.backgroundIcons} projectInformation={this.state.projectInformation} />
        <AboutMe />
        <Contact />

      </div>
    );
  }
}

export default App;
