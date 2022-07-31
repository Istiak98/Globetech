import React from "react";
import "./Navbar.css";
import logo from "../../assets/globetech-logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
      <nav class="navbar">
        <div class="logo">
          <img src={logo} alt="" />
        </div>
        <input type="checkbox" name="" id="menu-toggler" />
        <label for="menu-toggler" class="menu-toggler-label">
          <div class="toggler-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
        <ul class="navigation">
          <Link className="navigation-up" to="/" style={{"text-decoration":"none"}}>
            Home
          </Link>
          <Link className="navigation-up" to="/service" style={{"text-decoration":"none"}}>
            Service
          </Link>
          <Link className="navigation-up" to="/login"style={{"text-decoration":"none"}}>
            Login
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
