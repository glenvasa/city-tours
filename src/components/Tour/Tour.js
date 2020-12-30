import React, { Component } from "react";
import "./Tour.scss";
import photo from "./pexels-pixabay-40142.jpg";

export default class Tour extends Component {
  render() {
    return (
      <article className="tour">
        <div className="img-container">
          <img src={photo} alt="boston-skyline" />
          <span className="close-btn">
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>city</h3>
          <h4>name</h4>
          <h5>
            info{" "}
            <span>
              <i className="fas fa-caret-square-down"></i>
            </span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            debitis.
          </p>
        </div>
      </article>
    );
  }
}
