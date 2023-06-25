import React, { useState, useEffect } from "react";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = () => {
    fetch("https://www.mmobomb.com/api1/latestnews")
      .then((response) => response.json())
      .then((data) => {
        console.log("GameNews GET Success", data);
        setNews(data);
      })
      .catch((error) => {
        console.error("GameNews GET Error:", error);
      });
  };

  return (
    <div>
      <h2>Game News</h2>
      {news.map((currentNews) => (
        <div key={currentNews.id}>
          <a href={currentNews.article_url} target="_blank">
            <img src={currentNews.main_image} alt="game thumbnail" />
          </a>
          <h3>{currentNews.title}</h3>
          <p>{currentNews.short_description}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
