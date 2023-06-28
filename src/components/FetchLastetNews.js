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
        setNews(data.slice(0, 8));
      })
      .catch((error) => {
        console.error("LatestNews GET Error:", error);
      });
  };

  return (
    <div className="home-news-background">
      <div className="home-news-foreground">
        <h2>Game News</h2>
        <div className="home-news-container">
          {latestNews.map((news) => (
            <div className="home-news-card" key={news.id}>
              <a
                href={news.article_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={news.thumbnail} alt="game thumbnail" />
              </a>
              <div className="home-news-info">
                <h3>{news.title}</h3>
                <br />
                <p>{news.short_description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetchLatestNews;
