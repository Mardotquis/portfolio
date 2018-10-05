import React, { Component } from 'react';
import "./App.scss";

import Header from './components/Header/Header';
import MainHeader from './components/MainHero/MainHero';
import AboutMe from './components/AboutMe/AboutMe';
class App extends Component {
  render() {
    document.querySelectorAll('a[href="#aboutme"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    return (
      <div>
        <Header />
        <MainHeader />
        <AboutMe />
      </div>
    );
  }
}

export default App;
