import "./App.css";
import GameList from "./components/GameList";
import GameForm from "./components/GameForm";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Game List</Link>
          <Link to="/add-game">Add Game</Link>
        </nav>
        <Routes>
          <Route path="/" element={<GameList />} />
          <Route path="/add-game" element={<GameForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
