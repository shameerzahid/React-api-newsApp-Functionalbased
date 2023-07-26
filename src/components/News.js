import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, settotalReslts] = useState(0);

  useEffect(() => {
    document.title = `News SHAM - ${props.category}`;
    updateNews();
  }, []);
  // async componentDidMount() {
  //   //will run after the render method and async means it will wait for prmise to reslove
  //   // let url =
  //   //   `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4b4c43b99efd4ceaa13c67023a8a5839&page=1&pageSize=${props.pageSize}`;
  //   //   this.setState(
  //   //     {loading: true}
  //   //     )
  //   //   let data = await fetch(url); //will retrn promises
  //   // let parseddata = await data.json();
  //   // console.log(parseddata);
  //   // this.setState({
  //   //   articles: parseddata.articles,
  //   //   TotalResults: parseddata.totalResults,
  //   //   loading:false
  //   // });
  //   this.updateNews();
  // }
  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    setLoading(true);
    let data = await fetch(url); //will retrn promises
    props.setProgress(30);
    let parseddata = await data.json();
    props.setProgress(70);
    setArticles(parseddata.articles);
    settotalReslts(parseddata.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apikey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url); //will retrn promises
    let parseddata = await data.json();
    setArticles(articles.concat(parseddata.articles));
    settotalReslts(parseddata.totalResults);
    setLoading(false);
  };

  // const HandleNextClick = async () => {
  //   if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {

  //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4b4c43b99efd4ceaa13c67023a8a5839&page=${
  //     //   this.state.page + 1
  //     // }&pageSize=${props.pageSize}`;
  //     // this.setState(
  //     // {loading: true}
  //     // )
  //     // let data = await fetch(url); //will retrn promises
  //     // let parseddata = await data.json();
  //     // console.log(parseddata);
  //     // this.setState({
  //     //   page: this.state.page + 1,
  //     //   articles: parseddata.articles,
  //     //   loading: false
  //     // });

  //     setPage(page - 1)
  //     updateNews();
  //   }
  // };
  //  const HandlePrevClick = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4b4c43b99efd4ceaa13c67023a8a5839&page=${
  //   //   this.state.page - 1
  //   // }&pageSize=${props.pageSize}`;
  //   // let data = await fetch(url); //will retrn promises
  //   // let parseddata = await data.json();
  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parseddata.articles,
  //   // });
  //   setPage(page + 1)
  // updateNews();
  // };
  return (
    <>
      <h1 className="text-center" style={{ marginTop: "90px" }}>
        NewsMonkey - {props.category} headlines{" "}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    publishedAt={new Date(element.publishedAt).toGMTString()}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.HandlePrevClick}
          >
        
            &larr; previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page + 1 > Math.ceil(this.state.TotalResults /props.pageSize)}
            onClick={this.HandleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
    </>
    // {/* 4b4c43b99efd4ceaa13c67023a8a5839 */}
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
