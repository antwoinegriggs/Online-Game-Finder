import React, { useState, useEffect } from "react";

const Home = () => {
  const [news, setNews] = useState([]);

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
};

export default Home;
