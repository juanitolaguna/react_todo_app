import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  // setTimeout(() => {
  //   props.history.push("/contact");
  // }, 500);
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
