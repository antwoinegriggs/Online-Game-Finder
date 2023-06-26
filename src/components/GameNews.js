import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

const News = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 10;

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

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(news.length / newsPerPage);

  return (
    <div class="news">
      <h2>Game News</h2>
      <div class="news-container">
        {currentNews.map((currentNews) => (
          <div class="news-card" key={currentNews.id}>
            <a
              href={currentNews.thumbnail}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={currentNews.thumbnail} alt="game thumbnail" />
            </a>
            <div class="news-info">
              <h3>{currentNews.title}</h3>
              <br />
              <p>{currentNews.short_description}</p>
            </div>
          </div>
        ))}
      </div>
      <div class="news-pagination"></div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
};

export default News;
