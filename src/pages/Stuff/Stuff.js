import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import * as ActionTypes from '../../store/Actions';
import "./Stuff.css";

class Stuff extends Component {

  //state = {
  //  buttonName: 0
  //};

  changeNameAdd = e => {
    //App.ime = "2432432";
    //this.forceUpdate();
    // mapStateToProps(e.target.value);
    //e.dispatch( this.props.btnName);
    // this.forceUpdate();
    this.props.changeNameAdder(1);
  };

  changeNameSubtract = e => {
    //App.ime = "2432432";
    //this.forceUpdate();
    // mapStateToProps(e.target.value);
    //e.dispatch( this.props.btnName);
    // this.forceUpdate();
    this.props.changeNameSubtractor(1);
  };

  render() {
    return (
      <div>
        <section>
          <p>Test Redux connection...</p>
        </section>
        <button onClick={this.changeNameAdd}>ADDER: {this.props.btnNameAdd}</button>
        <button onClick={this.changeNameSubtract}>SUBTRACTOR:{this.props.btnNameSubtract}</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    btnNameAdd: state.buttonNameAdd,
    btnNameSubtract: state.buttonNameSubtract
  }
};

const mapDispatchToProps = dispatch => {
  return {
    changeNameAdder: (number) => dispatch({ type: ActionTypes.CHANGE_NAME, counter: number }),
    changeNameSubtractor: (number) => dispatch({ type: ActionTypes.DELETE_NAME, counter: number })
  }
};

{/* withRouter needed because of redux? */ }
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Stuff));
