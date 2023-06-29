import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GameFinder from "./components/GameFinder";
import GameAddForm from "./components/GameAddForm";
import Home from "./components/Home";
import News from "./components/GameNews";

function App() {
  const [games, setGames] = useState([]);

  const addGame = (newGame) => {
    setGames([...games, newGame]);
  };

  return (
    <div className="App">
      <Router>
        <nav className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/add-game">Add Game</Link>
          <Link to="/game-finder">Search</Link>
        </nav>
        <Routes>
          <Route path="/" component={<Home />} />
          <Route path="/news" component={<News />} />
          <Route
            path="/add-game"
            component={<GameAddForm addGame={addGame} />}
          />
          <Route path="/game-finder" component={<GameFinder games={games} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
