import React, { Component, Fragment } from 'react';
import "./App.scss";
import Header from './components/Header/Header';
import MainHeader from './components/MainHero/MainHero';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { backgroundIcons, projectInformation, mainHeroIcons, challenges } from "./assets/json/portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundIcons,
      projectInformation,
      mainHeroIcons,
      challenges
    }
  }

  sendPageHeaders = () => {
    if (process.env.NODE_ENV === "development") return;
    // stop the function if I'm currently doing development testing
    try {
      fetch("https://qz4rx6qar7.execute-api.us-east-1.amazonaws.com/prod/pageload", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: "hello" })
      })
    } catch (e) {
      console.log(e)
    }
  }

  componentDidMount() {
    this.sendPageHeaders()
  }



  scrollIntoThisDiv = (id) => {
    const divToScrollInto = document.getElementById(`${id}`);
    divToScrollInto.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  render() {
    return (
      <Fragment>
        <Header scrollIntoThisDiv={this.scrollIntoThisDiv} />
        <main>
          <MainHeader mainHeroIcons={this.state.mainHeroIcons} scrollIntoThisDiv={this.scrollIntoThisDiv} />
          <Projects backgroundIcons={this.state.backgroundIcons} projectInformation={this.state.projectInformation} challenges={this.state.challenges} />
          <AboutMe />
          <Contact />
        </main>
      </Fragment>
    );
  }
}

export default App;
