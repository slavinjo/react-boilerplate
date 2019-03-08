import React, { Component } from "react";
import { withRouter } from "react-router"; 

import "./Stuff.css";
import App from "../../App";

class Stuff extends Component {
  state = {
    buttonName: "Change name"
  };

  changeName = e => {
    //App.ime = "2432432";
    //this.forceUpdate();
  };

  render() {
    return (
      <div>
        <section>
          <p>Stuff</p>
        </section>
        <button onClick={this.changeName}>Change me</button>
      </div>
    );
  }
}

{/* withRouter needed because of redux? */}
export default withRouter(Stuff);
