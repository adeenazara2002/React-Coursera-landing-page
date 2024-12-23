import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">For individuals</li>
        <li className="navbar-item">For business</li>
        <li className="navbar-item">For universities</li>
        <li className="navbar-item">For governments</li>
      </ul>
    </nav>
  );
};

export default Header;
