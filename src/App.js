import React, { Component } from 'react';
import "./App.scss";

import Header from './components/Header/Header';
import MainHeader from './components/MainHero/MainHero';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainHeader />
      </div>
    );
  }
}

export default App;
