import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <header className="haader">
        <nav>
          <NavLink to="/"></NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
