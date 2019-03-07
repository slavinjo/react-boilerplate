import React from 'react';
import './Main.css';

const main = (props) => {
    return (
        <main className="main">
           <p>Neki paragraf</p>
           {props.children}
        </main>
    );
}

export default main;