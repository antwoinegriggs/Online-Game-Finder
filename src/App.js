// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GameList from "./components/GameList";
import GameForm from "./components/GameForm";
import Home from "./components/Home";
import News from "./components/News";

function App() {
  const [games, setGames] = useState([]);

  const addGame = (newGame) => {
    setGames([...games, newGame]);
  };

  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/add-game">Add Game</Link>
          <Link to="/game-search">Game Search</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home games={games} />} />
          <Route path="/news" element={<News />} />
          <Route path="/add-game" element={<GameForm addGame={addGame} />} />
          <Route path="/game-search" element={<GameList games={games} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
