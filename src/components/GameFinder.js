import React, { useState, useEffect } from "react";
import GameItem from "./GameItem";
import Pagination from "./Pagination";

const GameFinder = () => {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const gamesPerPage = 28;

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = () => {
    fetch("https://online-games-db.onrender.com/games")
      .then((response) => response.json())
      .then((data) => {
        console.log("GameFinder GET Success", data);
        setGames(data);
      })
      .catch((error) => {
        console.error("GameFinder GET Error:", error);
      });
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);
  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);

  return (
    <div className="game-finder-container">
      <h2>Game Finder</h2>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Search by Title"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="game-item-container">
        {currentGames.map((game) => (
          <GameItem key={game.id} game={game} />
        ))}
      </div>
      <div className="pagination-container">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      </div>
    </div>
  );
};

export default GameFinder;
