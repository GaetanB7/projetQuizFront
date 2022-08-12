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
                <a className="nav-link m-0" href="/quizs">
                  <NavLink to="/quizs">Quizs</NavLink>
                </a>
              </li>
              <li className="nav-item d-flex">
                {/* <img className="icones m-2" src="images/categorie.png" alt="" /> */}
                <a className="nav-link m-0" href="/categories">
                  <NavLink to="/categories">Categories</NavLink>
                </a>
              </li>
              <li className="nav-item d-flex me-5">
                {/* <img className="icones m-2" src="images/mail.png" alt="" /> */}
                <a className="nav-link m-0" href="/contact">
                  <NavLink to="/contact">Contact</NavLink>
                </a>
              </li>
              <Search />

              <div className="menu-user">
              {(!isAuthenticated && (
                <>
                  <li>
                    <a className="nav-link " href="/connexion">
                      {" "}
                      <NavLink to="/connexion">Connexion</NavLink>
                    </a>
                  </li>
                  <li>
                    <a className="nav-link " href="/inscription">
                      <NavLink to="/inscription">Inscription</NavLink>
                    </a>
                  </li>
                </>
              )) || (
                <>
                  <li>
                    <a className="nav-link ">
                      {" "}
                      <NavLink  to="/espace">Profil</NavLink>
                    </a>
                  </li>
                  <li onClick={handleLogout}>
                    <a className="nav-link ">
                    <NavLink  to="/">Deconnexion</NavLink>
                    </a>
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
