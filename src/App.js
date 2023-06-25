// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GameList from "./components/GameList";
import GameForm from "./components/GameForm";

function App() {
  const [games, setGames] = useState([]);

  const addGame = (newGame) => {
    setGames([...games, newGame]);
  };

  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Game List</Link>
          <Link to="/add-game">Add Game</Link>
        </nav>
        <Routes>
          <Route path="/" element={<GameList games={games} />} />
          <Route path="/add-game" element={<GameForm addGame={addGame} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
