import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Connexion.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { url } from "../services/AuthApi";

const Inscription = () => {
  const initialFormData = Object.freeze({
    nom: "",
    prenom: "",
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
    date_naissance: "",
    User: "ABO",
  });

  const [formData, updateFormData] = useState(initialFormData);
  const [isValidate, setIsValidate] = useState(true);
  const [errorData, setErrorData] = useState("");
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [passwordConfIsVisible, setPasswordConfIsVisible] = useState(false);


  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(url+"/api/user/add", formData).then(
      (response) => {
        console.log(response);
        toast.success(response.data)
        setIsValidate(false);
      },
      (response) => {
        console.log(response.response.data);
        setErrorData(response.response.data);
        toast.error(response.response.data);
      }
    );
  };

  const succes = () => {
    if (isValidate === false) {
      return (
        <div className="reussi">
          <h3>Votre compte a bien été crée !</h3>
          <Link to="/">
            <div className="btn btn-primary mb-3 boutton-retour">
              Retourer à l'acceuil
            </div>
          </Link>
        </div>
      );
    }
  };

  
  return (
    <div style={{ paddingTop: "130px" }}>
      <div className="wrapper">
        {isValidate && (
          <form action="#" className="formulaire-inscription">
            <div className="h5 font-weight-bold text-center mb-3">Inscription</div>

            <div className="form-group d-flex align-items-center">
              <div className="icon">
                <span className="far fa-user"></span>
              </div>
              <input
                autocomplete="off"
                type="text"
                className="form-control"
                name="nom"
                onChange={handleChange}
                placeholder="Nom"
              />
            </div>

            <div className="form-group d-flex align-items-center">
              <div className="icon">
                <span className="far fa-user"></span>
              </div>
              <input
                autocomplete="off"
                type="text"
                className="form-control"
                name="prenom"
                onChange={handleChange}
                placeholder="Prenom"
              />
            </div>

            <div className="form-group d-flex align-items-center">
              <div className="icon">
                <span className="fas fa-user"></span>
              </div>
              <input
                autocomplete="off"
                type="text"
                className="form-control"
                name="pseudo"
                onChange={handleChange}
                placeholder="Pseudo"
              />
            </div>

            <div className="form-group d-flex align-items-center">
              <div className="icon">
                <span className="far fa-envelope"></span>
              </div>
              <input
                autocomplete="off"
                type="email"
                className="form-control"
                name="email"
                onChange={handleChange}
                placeholder="Email"
              />
            </div>

            <div className="form-group d-flex align-items-center">
              <div className="icon">
                <span className="fas fa-key"></span>
              </div>
              <input
                autocomplete="off"
                type={passwordIsVisible ? "text" : "password"}
                className="form-control"
                name="password"
                onChange={handleChange}
                placeholder="Mot de passe"
              />
              <div onClick={() =>  setPasswordIsVisible(!passwordIsVisible)} className="icon btn">
                <span className="fas fa-eye-slash"></span>
              </div>
            </div>

            <div className="form-group d-flex align-items-center">
              <div className="icon">
                <span className="fas fa-key"></span>
              </div>
              <input
                autocomplete="off"
                type={passwordConfIsVisible ? "text" : "password"}
                className="form-control"
                name="confirmPassword"
                onChange={handleChange}
                placeholder="Confimer le mot de passe"
              />
              <div onClick={() => setPasswordConfIsVisible(!passwordConfIsVisible)} className="icon btn">
                <span className="fas fa-eye-slash"></span>
              </div>
            </div>

            <div className="form-group d-flex align-items-center">
              <div className="icon">
                <span className="far fa-calendar"></span>
              </div>
              <input
                autocomplete="off"
                type="date"
                className="form-control"
                name="date_naissance"
                onChange={handleChange}
                placeholder="Date de naissance"
              />
            </div>

            {/* <div className="mb-2">
                <label className="option">Remember me
                    <input type="checkbox" checked/>
                    <span className="checkmark"></span>
                </label>
            </div> */}

            <div className="btn btn-primary mb-3" onClick={handleSubmit}>
              S'inscrire
            </div>
            <div className="terms mb-2">
              En cliqaunt sur "S' inscrire", je certifie que j'ai pris
              connaissance des
              <a href="#"> Privacy Policy </a> et je suis d'accord avec les
              <a href="#"> Terms of Service</a>.
            </div>
            <div className="connect border-bottom mt-4 mb-4"></div>
            <ul className="p-0 social-links">
              <li>
                <a href="#">
                  <span className="fab fa-facebook-f"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-google"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-github"></span>
                </a>
              </li>
            </ul>
          </form>
        )}
        {succes()}
      </div>
      <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </div>
  );
};

export default Inscription;
