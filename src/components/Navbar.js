import React from "react";
import "./Navbar.css";
import logo from "../Images/logo.png";

const Navbar = () => {
  return (
    <div className="secondary-navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Coursera Logo" className="logo" />
      </div>

      <div className="navbar-dropdown">
        <button className="dropdown-btn">Explore</button>
        <div className="dropdown-content">
          <a href="#">Courses</a>
          <a href="#">Specializations</a>
          <a href="#">Certificates</a>
        </div>
      </div>

      <div className="navbar-search">
        <input type="text" placeholder="What do you want to learn?" />
        <div className="search-icon-container">
          <i className="fas fa-search"></i>
        </div>
      </div>

      <div className="navbar-links">
        <a href="#" className="navbar-link">
          Online Degrees
        </a>
        <a href="#" className="navbar-link">
          Career
        </a>
        <a href="#" className="navbar-link">
          Login
        </a>
      </div>

      <button className="join-btn">Join for Free</button>
    </div>
  );
};

export default Navbar;
