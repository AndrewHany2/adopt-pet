import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import "./NavBar.css";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-fixed-top navbar-dark bg-nav main-nav">
        <div className="container">
            <ul className="nav navbar-nav">
            <i><FontAwesomeIcon icon={faPaw} className="m-nav-icon mr-3 mt-1"/></i>
                <li className="nav-item active"><Link className="nav-link nav-logo" to="#">WOOF!</Link></li>
            </ul>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
         
            <ul className="nav navbar-nav mx-auto nav-item-font">
              <li className="nav-item active">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pets">
                  Adobtion-Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="#">
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contactUs">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active ml-md-5" to="/signin">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
