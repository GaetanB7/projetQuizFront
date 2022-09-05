import axios from "axios";
import React, { useState} from "react";
import '../style/Connexion.css';
import { ToastContainer, toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import { useNavigate  } from 'react-router-dom';
import { url } from "../services/AuthApi";

const Connexion = () => {

    const initialFormData = Object.freeze({
        email: "",
        password: "",
      });

    const [formData, updateFormData] = useState(initialFormData);
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    const history = useNavigate ()

    const handleChange = (e) => {
        updateFormData({
          ...formData,
    
          // Trimming any whitespace
          [e.target.name]: e.target.value.trim(),
        });
      };

      const handleSubmit = (e) => {
        console.log(formData);
        e.preventDefault();
        axios.post(url+"/auth/login", formData).then(
          (response) => {
            window.localStorage.setItem("authToken",response.data.accessToken);
            window.localStorage.setItem("username",response.data.email);
            toast("conecter")
            history("../espace"); 
            window.location.reload()
          },
          (response) => {
            console.log(response);
            toast.error("identifiant incorect");
          }
        );

      };


      // const isAuthenticate = () => {
      //   const token = window.localStorage.getItem("authToken")

      //   if(token){
      //     const {exp} = jwtDecode(token)
      //     if(exp *1000 > new Date().getTime()){
      //       return true
      //     }
      //     return false;
      //   }
      // }

    return (
        <div style={{ paddingTop: "130px" }}>
        <div class="wrapper">
            <form action="#" className="formulaire-inscription">
              <div class="h5 font-weight-bold text-center mb-3">Connexion</div>
  
 
  
              <div class="form-group d-flex align-items-center">
                <div class="icon">
                  <span class="far fa-envelope"></span>
                </div>
                <input
                  autocomplete="off"
                  type="text"
                  class="form-control"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
  
              <div class="form-group d-flex align-items-center">
              <div class="icon">
                <span class="fas fa-key"></span>
              </div>
              <input
                autocomplete="off"
                type={passwordIsVisible ? "text" : "password"}
                class="form-control"
                name="password"
                onChange={handleChange}
                placeholder="Mot de passe"
              />
              <div onClick={() =>  setPasswordIsVisible(!passwordIsVisible)} class="icon btn">
                <span class="fas fa-eye-slash"></span>
              </div>
            </div>
  

  
              {/* <div class="mb-2">
                  <label class="option">Remember me
                      <input type="checkbox" checked/>
                      <span class="checkmark"></span>
                  </label>
              </div> */}
  
              <div class="btn btn-primary mb-3" onClick={handleSubmit}>
                Se connecter
              </div>
 
              <div class="connect border-bottom mt-4 mb-4"></div>
              <ul class="p-0 social-links">
                <li>
                  <a href="#">
                    <span class="fab fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fab fa-google"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fab fa-github"></span>
                  </a>
                </li>
              </ul>
            </form>
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

export default Connexion;
