import React, { useState } from "react";

const GameAddForm = ({ addGame }) => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [thumbnail, setThumbnail] = useState(
    "https://cdn.discordapp.com/attachments/952764969638834228/1004715701744975892/Criz.png"
  );

  const fetchThumbnail = () => {
    fetch("https://anyanime-api.kurizu.repl.co/anime")
      .then((response) => response.json())
      .then((data) => {
        console.log("RandomImg GET Success", data);
        setThumbnail(data.stuff[0].image);
      })
      .catch((error) => {
        console.error("RandomImg GET Error:", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchThumbnail();
    console.log(thumbnail);

    const newGame = {
      thumbnail,
      title,
      genre,
    };

    fetch("https://online-games-db.onrender.com/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGame),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("GameAddForm POST Success", data);
        setTitle("");
        setGenre("");
        addGame(data);
      })
      .catch((error) => {
        console.error("handleSubmit Error:", error);
      });
  };

  return (
    <div className="add-game-container">
      <h2>Add Game</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <input
            className="options-input"
            type="text"
            placeholder="Add Game Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="options-container">
          <br />
          <select
            className="options-drop-down"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">Select Genre</option>
            <option value="MMORPG">MMORPG</option>
            <option value="Social">Social</option>
            <option value="Sports">Sports</option>
            <option value="Strategy">Strategy</option>
            <option value="Card Game">Card Game</option>
            <option value="Web Browser">Web Browser</option>
            <option value="MMO">MMO</option>
            <option value="Shooter">Shooter</option>
            <option value="Fighting">Fighting</option>
            <option value="MOBA">MOBA</option>
            <option value="Racing">Racing</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Battle Royale">Battle Royale</option>
            <option value="MMOARPG">MMOARPG</option>
          </select>
        </div>
        <br />
        <button className="add-btn" type="submit">
          Add Game
        </button>
      </form>
    </div>
  );
};

export default GameAddForm;
