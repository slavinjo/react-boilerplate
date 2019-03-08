import React, { Component } from 'react';
import MainContent from './components/layout/MainContent/MainContent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  //static ime = 'aaa';

  render() {
    return (
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    );
  }
}

export default App;
