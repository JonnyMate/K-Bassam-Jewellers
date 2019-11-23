import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/locations">
            <li>Locations</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
