import "./App.css";
import GameList from "./components/GameList";
import GameForm from "./components/GameForm";

function App() {
  return (
    <div className="App">
      <GameForm />
      <GameList />
    </div>
  );
}

export default App;
