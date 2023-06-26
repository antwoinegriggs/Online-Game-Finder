import React from "react";

const GameItem = ({ game }) => {
  return (
    <div class="game-item-card">
      <a href={game.game_url} target="_blank">
        <img src={game.thumbnail} alt="game thumbnail" />
      </a>
      <h3>{game.title}</h3>
      <br />
      <p>{game.genre}</p>
    </div>
  );
};

export default GameItem;
