import {NavLink} from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Food
    </NavLink>
    <NavLink
      to="/profile"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      My Account
    </NavLink>
    <NavLink
      to="/orders"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Orders
    </NavLink>
  </div>
);

export default MainNav;
