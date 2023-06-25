import React, { useState } from "react";

const GameAddForm = ({ addGame }) => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newGame = {
      title,
      genre,
    };

    fetch("http://localhost:3001/games", {
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
    <div>
      <h2>Add Game</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Genre:</label>
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default GameAddForm;
