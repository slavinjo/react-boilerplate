import React, { Component } from "react";
import {withRouter} from 'react-router';

import "./Stuff.css";

class Stuff extends Component {
  state = {
    buttonName: "Change name"
  };

  changeName = e => {
    e.preventDefault();
    this.setState({ buttonName: "New name" });
  };


  render() {
    return (
      <div>
        <section>
          <p>Stuff</p>
        </section>
        <button onClick={this.changeName}>{this.state.buttonName}</button>
      </div>
    );
  }
}

export default withRouter(Stuff);
