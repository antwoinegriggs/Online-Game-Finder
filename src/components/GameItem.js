import React from "react";

const GameItem = ({ game }) => {
  return (
    <div>
      <img src={game.thumbnail} alt="game thumbnail" />
      <h3>{game.title}</h3>
      <p>{game.genre}</p>
    </div>
  );
};

export default GameItem;
