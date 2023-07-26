import React from "react";

const Newsitem = (props) => {


    let {title , description, imageUrl, newsUrl, author, publishedAt} = props;
    return (
       
      <div className="my-3">
        <div className="card" >
          <img src={!imageUrl? "https://images.moneycontrol.com/static-mcnews/2022/08/stocks_sensex_nifty_stockmarket1-770x433.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            
            <h5 className="card-title">{title}...
           </h5>
            <p className="card-text">
        {description}...
            </p>
            <p className="card-text"><small className="text-muted">By : {author} </small></p>
            <p className="card-text"><small className="text-muted">Published at : {publishedAt} </small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default Newsitem;
