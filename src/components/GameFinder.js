import React, { useState, useEffect } from "react";
import GameItem from "./GameItem";
import Pagination from "./Pagination";

const GameFinder = () => {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const gamesPerPage = 25;

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = () => {
    fetch("http://localhost:3001/games")
      .then((response) => response.json())
      .then((data) => {
        console.log("GameFinder GET Success");
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
    <div class="game-finder-container">
      <h2>Game Finder</h2>
      <div class="search-bar">
        <input
          class="search-input"
          type="text"
          placeholder="Search by Title"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div class="game-item-container">
        {currentGames.map((game) => (
          <GameItem key={game.id} game={game} />
        ))}
      </div>
      <div class="pagination-container">
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
