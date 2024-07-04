import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../assets/App.css";
function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
