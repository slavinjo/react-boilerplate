import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import * as ActionTypes from "../../store/Actions";
import "./Stuff.css";

class Stuff extends Component {
  state = {
    //buttonName: 0
    videoURL: "http://techslides.com/demos/sample-videos/small.mp4"
  };

  componentWillMount() {
    // will trigger the callback function whenever a new Route renders a component(as long as this component stays mounted as routes change)
    this.props.history.listen(() => {
      // view new URL
      console.log("New URL", this.props.history.location.pathname);
    });
  }

  changeNameAdd = e => {
    //App.ime = "2432432";
    //this.forceUpdate();
    // mapStateToProps(e.target.value);
    //e.dispatch( this.props.btnName);
    // this.forceUpdate();
    this.props.changeNameAdder(1);
  };

  changeNameSubtract = e => {
    this.props.changeNameSubtractor(1);
  };

  resetName = e => {
    this.props.resetName();
    //this.props.history.push('/contact');
  };

  render() {
    return (
      <div>
        <section>
          <p>Test Redux connection...</p>
        </section>
        <button onClick={this.changeNameAdd}>
          ADDER: {this.props.btnNameAdd}
        </button>
        <button onClick={this.resetName}>RESET</button>
        <button onClick={this.changeNameSubtract}>
          SUBTRACTOR:{this.props.btnNameSubtract}
        </button>
        <section>
          <video id="background-video" controls loop autoPlay>
            <source src={this.state.videoURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    btnNameAdd: state.buttonNameAdd,
    btnNameSubtract: state.buttonNameSubtract
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeNameAdder: number =>
      dispatch({ type: ActionTypes.CHANGE_NAME, counter: number }),
    changeNameSubtractor: number =>
      dispatch({ type: ActionTypes.DELETE_NAME, counter: number }),
    resetName: () => dispatch({ type: ActionTypes.RESET_NAMES })
  };
};

{
  /* withRouter needed because of redux? */
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Stuff));
