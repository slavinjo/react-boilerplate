import React, { Component } from "react";
import axios from 'axios';

import "./Photos.css";

class Photos extends Component {

  state = {
    photos: null
  }

  componentDidMount() {
    axios.get('/posts')
      .then(
        response => {
          const posts = response.data.slice(0, 4);
          const updatedPosts = posts.map(post => {
            return {
              ...post
            }
          })
          this.setState({ photos: updatedPosts })
        }
      )
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <section>
          <p>Photos</p>
        </section>
        <div>{this.state.photos != null ? this.state.photos[0].title : null}</div>
      </div>
    );
  }
}

export default Photos;
