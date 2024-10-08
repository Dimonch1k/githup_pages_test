import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="content">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/doctors">Doctors</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
          <NavLink to="/location">Location</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
