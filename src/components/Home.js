import React, { useState, useEffect } from "react";
import FetchLatestNews from "./FetchLastetNews";
import FetchLatestGames from "./FetchLatestGames";

const Home = () => {
  return (
    <>
      <FetchLatestNews />
      )(
      <FetchLatestGames />
    </>
  );
};

export default Home;
