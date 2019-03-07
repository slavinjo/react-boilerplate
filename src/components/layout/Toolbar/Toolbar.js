import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import { NavLink } from "react-router-dom";

const Toolbar = (props) => {
    return (
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div>
                    <DrawerToggleButton handleClick={props.handleClick} />
                </div>
                <div className="toolbar__logo"><a href="/">Logo 1</a></div>
                <div className="spacer"></div>
                <div className="toolbar_navigation-items">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">Stuff</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Toolbar;