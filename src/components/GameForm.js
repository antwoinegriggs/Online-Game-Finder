import React, { useState } from "react";

const GameForm = () => {
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
        console.log("GameForm POST Success", data);
        setTitle("");
        setGenre("");
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
          <textarea value={genre} onChange={(e) => setGenre(e.target.value)} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default GameForm;
