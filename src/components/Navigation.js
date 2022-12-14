import React, { useContext,  useState} from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "../style/Navigation.css";
import Search from "./Search";
import Auth from "../Contexts/Auth";
import { hasAuthenticated, logout } from "../services/AuthApi";

const Navigation = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  const { isAdministrator, setIsAdministrator } = useContext(Auth);
  const [burgerOpen, setBurgerOpen] = useState(false);


  console.log("rdu")
  console.log(isAdministrator);

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  return (
    <div className="navigation">
      <nav className="navbare ">
        <div className="container-fluid">
          <NavLink to="/" className="navbare-brand" >
            { burgerOpen ? "" : <Logo /> }
          </NavLink>

      
          <div className={burgerOpen? " navbar-content phone-menu" : "navbar-content" } >
      <div className="button-navbar">
            <ul className=" menu-quiz">
              
              <li className="">
                  <NavLink to="/quizs" onClick={()=> setBurgerOpen(false)}>Quizs</NavLink>
              </li>
              <li className="">
                  <NavLink to="/categories" onClick={()=> setBurgerOpen(false)}>Categories</NavLink>
              </li>
              <li className="">
                  <NavLink to="/contact" onClick={()=> setBurgerOpen(false)}>Contact</NavLink>
              </li>
              <Search />
          </ul>
   

   
                <ul className="menu-user">
              {(!isAuthenticated && (
                <>
                  <li>
                
                      <NavLink to="/connexion" onClick={()=> setBurgerOpen(false)}>Connexion</NavLink>
                  </li>
                  <li>
                      <NavLink to="/inscription" onClick={()=> setBurgerOpen(false)}>Inscription</NavLink>
                  </li>
                </>
              )) || (
                <>
                  <li>
                      {isAdministrator?(
                        <NavLink  to="/admin" onClick={()=> setBurgerOpen(false)} >Dashbord</NavLink>
                      ):(

                      <NavLink  to="/espace" onClick={()=> setBurgerOpen(false)} >Profil</NavLink>
                      )}
                  </li>
                  <li onClick={handleLogout}>
                    <NavLink  to="/" onClick={()=> setBurgerOpen(false)} >Deconnexion</NavLink>
                  </li>
                </>
              )}
              </ul>
   
                </div>
           
          </div>
                <img src="images/burger.png" alt="menu-burger" className="menu-burger" onClick={()=> setBurgerOpen(!burgerOpen)}/>
        </div>
      </nav>
      <br />
    </div>
  );
};

export default Navigation;
