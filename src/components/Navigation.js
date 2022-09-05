import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "../style/Navigation.css";
import Search from "./Search";
import Auth from "../Contexts/Auth";
import { hasAuthenticated, logout } from "../services/AuthApi";

const Navigation = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
    console.log("rdu")
    console.log(isAuthenticated);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <NavLink to="/"></NavLink>
            <Logo />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img className="burger" src="images/menu.png" alt="burger" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="col-2"></div>
            <ul className="navbar-nav menu-quiz">
              <li className="nav-item d-flex">
                {/* <img className="icones m-2" src="images/stopwatch.png" alt="" /> */}
                  <NavLink to="/quizs">Quizs</NavLink>
              </li>
              <li className="nav-item d-flex">
                {/* <img className="icones m-2" src="images/categorie.png" alt="" /> */}
                  <NavLink to="/categories">Categories</NavLink>
              </li>
              <li className="nav-item d-flex me-5">
                {/* <img className="icones m-2" src="images/mail.png" alt="" /> */}
                  <NavLink to="/contact">Contact</NavLink>
              </li>
              <Search />

              <div className="menu-user">
              {(!isAuthenticated && (
                <>
                  <li>
                      {" "}
                      <NavLink to="/connexion">Connexion</NavLink>
                  </li>
                  <li>
                      <NavLink to="/inscription">Inscription</NavLink>
                  </li>
                </>
              )) || (
                <>
                  <li>
                      {" "}
                      <NavLink  to="/espace">Profil</NavLink>
                  </li>
                  <li onClick={handleLogout}>
                    <NavLink  to="/">Deconnexion</NavLink>
                  </li>
                </>
                // <>
                //   <li>
                //   <NavLink  className="nav-link" to="/EspaceAbonne">Mon espace</NavLink>
                //   </li>

                //   <li style={{ color: "white" }} onClick={handleLogout}> <NavLink  className="nav-link" to="/">Deconnexion</NavLink></li>
                // </>
              )}
                </div>
            </ul>
          </div>
        </div>
      </nav>
      <br />
    </div>
  );
};

export default Navigation;
