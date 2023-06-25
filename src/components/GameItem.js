import React from "react";

const GameItem = ({ game }) => {
  return (
    <div>
      <a href={game.game_url} target="_blank">
        <img src={game.thumbnail} alt="game thumbnail" />
      </a>
      <h3>{game.title}</h3>
      <p>{game.genre}</p>
    </div>
  );
};

export default GameItem;
