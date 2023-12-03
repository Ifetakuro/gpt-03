import React from "react";
import "./blog.css";
import {
  article1,
  article2,
  article3,
  article4,
  article5,
} from "./imagesImport";
import Article from "../../components/article";

const Blog = () => {
  const articles = [
    {
      img: article1,
      date: "Dec 6, 2023",
      question:
        "Is GPT-3 and OpenAI the Future? Let's Embark on a Journey of Exploration!",
    },
    {
      img: article2,
      date: "Dec 3, 2023",
      question:
        "Is GPT-3 and OpenAI the Future? Let's Embark on a Journey of Exploration!",
    },
    {
      img: article3,
      date: "Nov 28, 2023",
      question:
        "Is GPT-3 and OpenAI the Future? Let's Embark on a Journey of Exploration!",
    },
    {
      img: article4,
      date: "Nov 27, 2023",
      question:
        "Is GPT-3 and OpenAI the Future? Let's Embark on a Journey of Exploration!",
    },
    {
      img: article5,
      date: "Nov 16, 2023",
      question:
        "Is GPT-3 and OpenAI the Future? Let's Embark on a Journey of Exploration!",
    },
  ];

  return (
    <div className="section__padding blog">
      <h2 className="gradient__text">
        The buzz is real, and we're not just witnessing it, we're capturing the
        whirlwind of excitement in our blog.{" "}
      </h2>
      <div className="articles">
        {articles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
