import React from 'react';
import './SideDrawer.css'
import { NavLink } from "react-router-dom";

const sideDrawer = props => {
    const visible = props.visible;
    let className = 'side-drawer';
    if (visible) {
        className = 'side-drawer open';
    }
    return (
        <nav className={className}>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/stuff">Stuff</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default sideDrawer;