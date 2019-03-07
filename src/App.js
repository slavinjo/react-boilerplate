import React, { Component } from 'react';
import MainContent from './components/MainContent/MainContent';
import { BrowserRouter } from 'react-router-dom';

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
