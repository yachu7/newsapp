import React, { Component } from "react";
import NewsItem from "./NewsItem";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      " https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6a831f8c589b4ec7ac093e1b12b433c0&page=1&pageSize=3";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles , totalResults: parsedData.totalResults});
  }
  handlePreClick = async () => {
    console.log("first")
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6a831f8c589b4ec7ac093e1b12b433c0&page=${
      this.state.page - 1 
    }&pageSize=3 `;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  handleNextClick = async () => {
    if( this.state.page + 1 > Math.ceil(this.state.totalResults/3) ){
      console.log("No more pages available.");

    }
    else{
      console.log("second")

      let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6a831f8c589b4ec7ac093e1b12b433c0&page=${
        this.state.page + 1
      }&pageSize=3 `;
      let data = await fetch(url);
      let parsedData = await data.json();
      
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageURL={element.urlToImage}
                  newsUrl={element.url}
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
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
