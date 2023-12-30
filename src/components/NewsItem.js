import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              className="stretched-link"
              style={{
                textDecoration: "none", // Remove underline
                color: "inherit", // Use the default text color
                cursor: "pointer", // Show a pointer cursor on hover
              }}
            ><span className="visually-hidden">Read more about {title}</span></a>
          </div>
        </div>
      </div>
    );
  }
}
