import React from 'react';
import './Backdrop.css';

const backdrop = (props) => {
    if(props.visible)
    return (
      <div className="backdrop" onClick={props.clicker}/>
    );
    return null;
}

export default backdrop;