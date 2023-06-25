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
};

export default News;
