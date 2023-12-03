import React from "react";
import "./article.css";

const Article = ({ img, date, question }) => {
  return (
    <div className="article">
      <div className="article-img">
        <img src={img} />
      </div>
      <div className="article-info">
        <span>{date}</span>
        <h3>{question}</h3>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
