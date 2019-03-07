import React from 'react';
import './Main.css';

import Home from '../../../pages/Home/Home';
import Stuff from '../../../pages/Stuff/Stuff';
import Contact from '../../../pages/Contact/Contact';

import { Route, Switch } from 'react-router-dom';


const Main = (props) => {
    return (
        <main className="main">
        {/*<p>Neki paragraf</p>
           {props.children}
        */}
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/stuff" component={Stuff} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </main>
    );
}

export default Main;