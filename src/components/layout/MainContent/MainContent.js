import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Footer from "../Footer/Footer";
import Main from '../Main/Main';

class MainContent extends React.Component {
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
        let sideBar = this.state.isSidebarVisible ? <SideDrawer visible={this.state.isSidebarVisible} /> : null ;
        return (
            <div>
                <Toolbar  handleClick={this.clickHandler} />
                <Backdrop visible={this.state.isSidebarVisible} handleClick={this.clickHandler} />
                <SideDrawer visible={this.state.isSidebarVisible} handleClick={this.clickHandler} />
                <Main />
                <Footer />
            </div>
        )
    };
}

export default MainContent;