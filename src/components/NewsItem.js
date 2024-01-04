import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsUrl, author, date, source } =
      this.props;
    const defaultImageURL =
      "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
    return (
      <div>
        <div className="card my-3">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-info"
            style={{
              left: "80%",
              zIndex: "1",
            }}
          >
            {source.name}
          </span>

          <img
            src={imageURL || defaultImageURL}
            className="card-img-top"
            alt="..."
            style={{ height: "200px ", objectFit: "contain" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author}
              </small>
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated on {new Date(date).toGMTString()}{" "}
              </small>
            </p>

            <a
              href={newsUrl}
              className="stretched-link"
              style={{
                textDecoration: "none", // Remove underline
                color: "inherit", // Use the default text color
                cursor: "pointer", // Show a pointer cursor on hover
              }}
            >
              <span className="visually-hidden">Read more...</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
