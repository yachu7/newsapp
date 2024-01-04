import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export default class News extends Component {
  static defaultProps = {
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `Khabar - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }

  async updateNow() {
    let url = ` https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=6a831f8c589b4ec7ac093e1b12b433c0&page=${this.state.page}&pageSize=${this.props.pageSize} `;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNow();
  }
  handlePreClick = async () => {
    await this.setState({ page: this.state.page - 1 });
    this.updateNow();
  };
  handleNextClick = async () => {
    await this.setState({ page: this.state.page + 1 });
    this.updateNow();
  };
  render() {
    return (
      <div className="container my-3">
        <h2>
          {this.props.category === "general"
            ? "Top Headlines"
            : `Top ${this.capitalizeFirstLetter(
                this.props.category
              )} Headlines`}
        </h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageURL={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark "
            onClick={this.handlePreClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={
              this.state.page ===
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
