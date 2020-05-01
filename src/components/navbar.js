import React from "react";
import { NavLink } from "react-router-dom";
import brand from "../assets/images/tails-that-wail-brand.png";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid social-media-container">
          <div className="bg-dark social-media">&nbsp;</div>
        </div>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">
              <img src={brand} alt="Tales That Wail" title="Tales That Wail" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse w-100"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/PreviewMakeItReal"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    Preview Make It Real
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/TalesThatWail"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    About the Series
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/AboutMorganBender"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    About the Author
                  </NavLink>
                </li>
              </ul>
              {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
