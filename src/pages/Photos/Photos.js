import React, { Component } from "react";
import axios from "axios";
import Gallery from 'react-grid-gallery';

import "./Photos.css";

class Photos extends Component {
  state = {
    photos: null,
    IMAGES: [
      {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail:
          "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
      },
      {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail:
          "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" }
        ],
        caption: "Boats (Jeshu John - designerspics.com)"
      },

      {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail:
          "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      }
    ]
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post
          };
        });
        this.setState({ photos: updatedPosts });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {/* <section>
          <p>Photos</p>
        </section>
        <div>{this.state.photos != null ? this.state.photos[0].title : null}</div>
         */}
             <Gallery images={this.state.IMAGES}/>
      </div>
    );
  }
}

export default Photos;
