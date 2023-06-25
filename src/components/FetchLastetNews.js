import React, { useState, useEffect } from "react";

const FetchLatestNews = () => {
  const [latestNews, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = () => {
    fetch("https://www.mmobomb.com/api1/latestnews")
      .then((response) => response.json())
      .then((data) => {
        console.log("LatestNews GET Success", data);
        setNews(data.slice(0, 5));
      })
      .catch((error) => {
        console.error("LatestNews GET Error:", error);
      });
  };

  return (
    <div>
      <h2>Game News</h2>
      {latestNews.map((news) => (
        <div key={news.id}>
          <a href={news.article_url} target="_blank" rel="noopener noreferrer">
            <img src={news.main_image} alt="game thumbnail" />
          </a>
          <h3>{news.title}</h3>
          <p>{news.short_description}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchLatestNews;
