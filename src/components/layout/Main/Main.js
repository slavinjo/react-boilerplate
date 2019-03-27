import React from "react";
import "./Main.css";

import Home from "../../../pages/Home/Home";
import Stuff from "../../../pages/Stuff/Stuff";
import Contact from "../../../pages/Contact/Contact";
import Photos from "../../../pages/Photos/Photos";

import { Route, Switch } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";

const Main = props => {
  return (
    <>
      <main className="main">
        {/*<p>Neki paragraf</p>
           {props.children}
        */}
        <Switch>
          <Route path={ROUTES.HOME} exact component={Home} />
          <Route path={ROUTES.STUFF} component={Stuff} />
          <Route path={ROUTES.CONTACT} component={Contact} />
          <Route path={ROUTES.PHOTOS} component={Photos} />
        </Switch>
      </main>
   
    </>
  );
};

export default Main;
