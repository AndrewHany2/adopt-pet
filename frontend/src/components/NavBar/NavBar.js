import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import "./NavBar.css";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const userLogin = useSelector((state) => state.userLogin);
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-nav main-nav">
        <div className="container">
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link nav-logo" to="/">
            <i>
              <img src='/resources/theLogo.png' width="80px" />
            </i>
              </Link>
            </li>
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="nav navbar-nav mx-auto nav-item-font">
              <li className="nav-item active ml-3">
                <Link className="nav-link active nave-box" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ml-3">
                <Link className="nav-link active nave-box" to="/pets/1">
                  Adobtion-Gallery
                </Link>
              </li>
              <li className="nav-item ml-3">
                <Link className="nav-link active nave-box" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item ml-3">
                <Link className="nav-link active nave-box" to="/contactus">
                  Contact
                </Link>
              </li>
              {!userLogin.success && (
                <li className="nav-item ml-3 ml-lg-5">
                  <Link className="nav-link active nave-box" to="/signin">
                    Sign In / Sign UP
                  </Link>
                </li>
              )}
              {userLogin.success && (
                <li className="nav-item ml-3">
                  <Link className="nav-link active nave-box" to="/addPet">
                    Add-Pet
                  </Link>
                </li>
              )}
            </ul>
            {userLogin.success && (
              <>
                <ul className="nav navbar-nav mx-auto nav-item-font ">
                  <li className="nav-item dropdown ml-3">
                    <Link
                      className="nav-link dropdown-toggle active nave-box"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Account
                    </Link>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link className="dropdown-item" to={`/profile/${userLogin.info.userId}`}>

                        Profile
                      </Link>
                      <Link  className="dropdown-item"  to={`/useradotionrequests/${userLogin.info.userId}`}>
                        Adoption Requests
                      </Link>
                      <Link  className="dropdown-item"  to="/messanger">
                        Messeges
                      </Link>
                      <Link className="dropdown-item" to="/signout">
                        Log Out{" "}
                      </Link>
                      {userLogin.info.userRole !== "USER" && <div className="dropdown-divider"></div>}
                      {userLogin.info.userRole !== "USER" && <Link className="dropdown-item" to="/dashboard#">
                        Dashboard{" "}
                      </Link>}

                    </div>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
