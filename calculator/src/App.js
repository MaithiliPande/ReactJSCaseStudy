import React from 'react';
import './App.css';

import HeaderComponent from './components/header';
import MainComponent from './components/main';

const App = () => (
  <div className="App">
    <div className="header">
      <HeaderComponent />
    </div>
    <div>
      <MainComponent />
    </div>
  </div>
);


export default App;
