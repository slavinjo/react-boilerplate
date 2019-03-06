import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isSidebarVisible: false };
  }


  clickHandler = () => {
    this.setState((prevState) => {
      return { isSidebarVisible: !prevState.isSidebarVisible }
    });
  }

  render() {
    {/*  let sideBar;
    if (this.state.isSidebarVisible)
      sideBar = <SideDrawer visible={this.state.isSidebarVisible} />
   */}
    return (
      <div style={{ height: '100%' }}>
        <Toolbar handleClick={this.clickHandler} />
        <Backdrop visible={this.state.isSidebarVisible} handleClick={this.clickHandler} />
        <SideDrawer visible={this.state.isSidebarVisible} />
        <Main />
        <Footer clicker={this.clickHandler} />
      </div>
    );
  }
}

export default App;
