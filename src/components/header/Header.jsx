import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "../../styles/components/header/Header.scss";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.screenY)
        if (window.scrollY > lastScrollY) setIsVisible(false); // Scrolling down
        else {
          setIsVisible(true); // Scrolling up
        }
      setLastScrollY(window.scrollY); // Update last scroll position
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader); // Cleanup the event listener
    };
  }, [lastScrollY]);

  return (
    <header
      className="header"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease",
      }}
    >
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
