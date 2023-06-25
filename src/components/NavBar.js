import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Game List</Link>
        </li>
        <li>
          <Link to="/add-game">Add Game</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
