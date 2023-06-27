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
        setGames(data.slice(0, 7));
      })
      .catch((error) => {
        console.error("LatestGames GET Error:", error);
      });
  };

  return (
    <div class="game-list">
      <h2>Game List</h2>
      <div class="game-list-container">
        {latestGames.map((games) => (
          <div class="game-list-card" key={games.id}>
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
    </div>
  );
};

export default FetchLatestGames;
