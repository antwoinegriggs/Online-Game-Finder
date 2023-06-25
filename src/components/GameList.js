import React, { useState, useEffect } from "react";

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = () => {
    fetch("http://localhost:3001/games/")
      .then((response) => response.json())
      .then((data) => {
        console.log("GameList GET Success");
        setGames(data);
      })
      .catch((error) => {
        console.error("GameList GET Error:", error);
      });
  };

  return (
    <div>
      <h2>Game List</h2>
      {games.map((game) => (
        <div key={game.id}>
          <img src={game.thumbnail} alt="game thumbnail" />
          <h3>{game.title}</h3>
          <p>{game.genre}</p>
        </div>
      ))}
    </div>
  );
};

export default GameList;
