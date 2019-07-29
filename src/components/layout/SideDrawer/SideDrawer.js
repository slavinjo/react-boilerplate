import React from 'react';
import './SideDrawer.css'
import { NavLink } from "react-router-dom";
import * as ROUTES from '../../../constants/routes';

const sideDrawer = props => {
    const visible = props.visible;
    let className = 'side-drawer';
    if (visible) {
        className = 'side-drawer open';
    }

    return (
        <nav className={className}>
            <ul>
                <li><NavLink to={ROUTES.HOME} onClick={props.handleClick}>Home</NavLink></li>
                <li><NavLink to={ROUTES.STUFF} onClick={props.handleClick}>Stuff</NavLink></li>
                <li><NavLink to={ROUTES.CONTACT} onClick={props.handleClick}>Contact</NavLink></li>
                <li><NavLink to={ROUTES.PHOTOS} onClick={props.handleClick}>Photos</NavLink></li>
            </ul>
        </nav>
    );
}

export default sideDrawer;