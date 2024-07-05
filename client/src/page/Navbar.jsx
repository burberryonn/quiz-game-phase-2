import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-links">
          <Link className="navbar-link" to="/home">
            Home
          </Link>
        </div>
        <div className="navbar-logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className="navbar-links">
          <Link className="navbar-link" to="/topics">
            Categories
          </Link>
        </div>
      </nav>

      <footer className="footer">
        <p>QUIZ имени Олегона, Паги и Бени</p>
      </footer>
      <Outlet />
    </>
  );
}

export default Navbar;
