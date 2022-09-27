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
            console.log("response")
            console.log(response)
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
        <div className="wrapper">
            <form action="#" className="formulaire-inscription">
              <div className="h5 font-weight-bold text-center mb-3">Connexion</div>
  
 
  
              <div className="form-group d-flex align-items-center">
                <div className="icon">
                  <span className="far fa-envelope"></span>
                </div>
                <input
                  autoComplete="off"
                  type="text"
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
                autoComplete="off"
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
  

  
              {/* <div className="mb-2">
                  <label className="option">Remember me
                      <input type="checkbox" checked/>
                      <span className="checkmark"></span>
                  </label>
              </div> */}
  
              <div className="btn btn-primary mb-3" onClick={handleSubmit}>
                Se connecter
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
