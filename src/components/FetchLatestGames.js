import React, { useState, useEffect } from "react";

const FetchLatestGames = () => {
  const [latestGames, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = () => {
    fetch("http://localhost:3001/games")
      .then((response) => response.json())
      .then((data) => {
        console.log("LatestGames GET Success", data);
        setGames(data.slice(0, 10));
      })
      .catch((error) => {
        console.error("LatestGames GET Error:", error);
      });
  };

  return (
    <div>
      <h2>Game List</h2>
      {latestGames.map((games) => (
        <div key={games.id}>
          <div>
            <a href={games.game_url} target="_blank">
              <img src={games.thumbnail} alt="game thumbnail" />
            </a>
            <h3>{games.title}</h3>
            <p>{games.genre}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FetchLatestGames;
