import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo.svg";
import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav id="navbar">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <ul>
          <NavLink className="link" activeClassName="active" exact to="/">
            Home
          </NavLink>
          <NavLink className="link" activeClassName="active" exact to="/">
            Solutions
          </NavLink>
          <NavLink
            className="link"
            activeClassName="active"
            exact
            to="/colocation"
          >
            CoLocation
          </NavLink>
          <NavLink className="link" activeClassName="active" exact to="/">
            Contact
          </NavLink>

          <NavLink className="button" activeClassName="active" exact to="/">
            Login
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
