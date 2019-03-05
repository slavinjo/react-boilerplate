import React from 'react';

import './DrawerToggleButton.css';

const drawerToggleButton = props => {
    console.log(props.clicker);
    return (
        <button className="toggle-button" onClick = {props.clicker}>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
        </button>
    );
}

export default drawerToggleButton;