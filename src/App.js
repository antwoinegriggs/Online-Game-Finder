import "./App.css";
import GameList from "./components/GameList";
import GameForm from "./components/GameForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <GameForm />
      <GameList />
    </div>
  );
}

export default App;
