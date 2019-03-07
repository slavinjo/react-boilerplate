import React, { Component } from 'react';
import MainContent from './components/MainContent/MainContent';
import Main from './components/Main/Main';

import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    );
  }
}

export default App;
