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
    <div>
      <h2>Game News</h2>
      {currentNews.map((currentNews) => (
        <div key={currentNews.id}>
          <a
            href={currentNews.article_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={currentNews.main_image} alt="game thumbnail" />
          </a>
          <h3>{currentNews.title}</h3>
          <p>{currentNews.short_description}</p>
        </div>
      ))}
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
