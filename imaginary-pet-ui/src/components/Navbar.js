import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="main-nav">
      <ul className="main-nav-list">
        <li>
          <Link className="main-nav-link nav-cta" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="main-nav-link" to="/create">
            Create
          </Link>
        </li>

        <li>
          <Link className="main-nav-link" to="/pets">
            Pets
          </Link>
        </li>

        <li>
          <Link className="main-nav-link" to="/activities">
            Activities
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
