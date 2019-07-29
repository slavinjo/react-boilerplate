import React from 'react';

import './DrawerToggleButton.css';

const drawerToggleButton = props => {
    console.log(props.handleClick);
    return (
        <button className="toggle-button" onClick = {props.handleClick}>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
        </button>
    );
}

export default drawerToggleButton;