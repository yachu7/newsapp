import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: [],
  //     loading: true,
  //     page: 1,
  //     totalResults: 0,
  //   };
  // document.title = `Khabar - ${this.capitalizeFirstLetter(
  //   props.category
  // )}`;

  const updateNow = async () => {
    props.setProgress(0);
    let url = ` https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize} `;

    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setLoading(false);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `Khabar - ${capitalizeFirstLetter(
      props.category
      // eslint-disable-next-line
    )}`;
    updateNow();
  }, []);

  // handlePreClick = async () => {
  //   await this.setState({ page: this.state.page - 1 });
  //   this.updateNow();
  // };
  // handleNextClick = async () => {
  //   await this.setState({ page: this.state.page + 1 });
  //   this.updateNow();
  // };
  const fetchMoreData = async () => {
    // this.setState({ page: this.state.page + 1 });
    let url = ` https://newsapi.org/v2/top-headlines?country=us&category=${
      props.category
    }&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize} `;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    // this.setState({
    //   articles: articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    // });
  };

  return (
    <>
      <h2
        className="text-center"
        style={{ margin: " 35px 0", marginTop: "90px" }}
      >
        {props.category === "general"
          ? "Top Headlines"
          : `Top ${capitalizeFirstLetter(props.category)} Headlines`}
      </h2>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles?.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="row ">
          {articles.map((element) => {
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
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
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
        </div> */}
    </>
  );
};

News.defaultProps = {
  pageSize: 6,
  category: "general",
};
News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
