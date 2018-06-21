import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HeaderComponent from './components/header';
import MainComponent from './components/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <HeaderComponent/>
        </div>
        <div>
          <MainComponent/>
        </div>
      </div>
    );
  }
}

export default App;
