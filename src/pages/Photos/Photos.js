import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import * as ActionTypes from '../../store/Actions';
import "./Photos.css";

class Photos extends Component {

  render() {
    return (
      <div>
        <section>
          <p>Photos</p>
        </section>
       
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
   
  }
};

const mapDispatchToProps = dispatch => {
  return {
  
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Photos));
