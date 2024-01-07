import React from "react";

const NewsItem = (props) => {
  let { title, description, imageURL, newsUrl, author, date, source } = props;
  const defaultImageURL =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
  return (
    <div style={{ margin: "15px" }}>
      <div
        className="card my-3"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span
            className="badge rounded-pill bg-info"
            style={{
              left: "80%",
              zIndex: "1",
            }}
          >
            {source.name}
          </span>
        </div>

        <img
          src={imageURL || defaultImageURL}
          className="card-img-top my-2"
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
};

export default NewsItem;
