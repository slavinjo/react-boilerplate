import React from 'react';
import './SideDrawer.css'

const sideDrawer = props => {
    const visible = props.visible;
    let className = 'side-drawer';
    if (visible) {
        className = 'side-drawer open';
    }
    return (
        <nav className={className}>
            <ul>
                <li><a href="/">Link 1</a></li>
                <li><a href="/">Link 2</a></li>
            </ul>
        </nav>
    );
}

export default sideDrawer;