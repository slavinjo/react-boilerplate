import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import { NavLink } from "react-router-dom";
import * as ROUTES from '../../../constants/routes';

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
                        <li><NavLink to={ROUTES.HOME}>Home</NavLink></li>
                        <li><NavLink to={ROUTES.STUFF}>Stuff</NavLink></li>
                        <li><NavLink to={ROUTES.CONTACT}>Contact</NavLink></li>
                        <li><NavLink to={ROUTES.PHOTOS}>Photos</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Toolbar;