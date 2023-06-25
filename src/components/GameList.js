import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GameList = () => {
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
        console.log("GameList GET Success");
        setGames(data);
      })
      .catch((error) => {
        console.error("GameList GET Error:", error);
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

  // Filter the games based on the search term
  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the index range of games to be rendered for the current page
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

  return (
    <div>
      <h2>Game List</h2>
      <div>
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {currentGames.map((game) => (
        <div key={game.id}>
          <img src={game.thumbnail} alt="game thumbnail" />
          <h3>{game.title}</h3>
          <p>{game.genre}</p>
        </div>
      ))}
      <div>
        {currentPage > 1 && (
          <Link to="#" onClick={handlePrevPage}>
            Previous Page
          </Link>
        )}
        {currentPage < Math.ceil(filteredGames.length / gamesPerPage) && (
          <Link to="#" onClick={handleNextPage}>
            Next Page
          </Link>
        )}
      </div>
    </div>
  );
};

export default GameList;
