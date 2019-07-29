import React from 'react';
import './Backdrop.css';

const backdrop = (props) => {
    if(props.visible)
    return (
      <div className="backdrop" onClick={props.handleClick}/>
    );
    return null;
}

export default backdrop;