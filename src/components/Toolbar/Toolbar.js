import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = (props) => {
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
                    <li><a href="/">Jedan</a></li>
                    <li><a href="/">Dva</a></li>
                </ul>
                </div>
            </nav>
        </header>
    );
}

export default toolbar;