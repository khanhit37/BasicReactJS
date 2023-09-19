import React from "react";
import "../views/Nav.scss";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div class="topnav">
        <NavLink class="active" exact={true} to="/">
          Home
        </NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/weather">Weather App</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/otp">Otp</NavLink>
      </div>
    </div>
  );
};

export default Nav;
