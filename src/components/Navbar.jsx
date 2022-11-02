import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1>logo</h1>
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/login">
          login
        </Link>
        <Link className="link" to="/basket">
          Basket
        </Link>
        <Link className="link" to="/productDetail/:id"></Link>
      </div>
    </div>
  );
}

export default Navbar;
