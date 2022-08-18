import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import "../style/EspaceAbonne.css";
import { getId, url } from "../services/AuthApi";
import UpdateUser from "../components/UpdateUser";
import QuizDone from "../components/QuizDone";




const EspaceAbonne = () => {
  const [user, setUser] = useState([]);
  const [edit, setEdit] = useState(false);
  const [display, setDisplay] = useState(1);
console.log(display)

  let ids = getId();
  console.log(ids);

  useEffect(() => {
    axios
      .get(url+`/api/user/find/${ids}`)
      .then((result) => setUser(result.data));
  }, []);

  console.log(user);

  return (
    <div style={{ paddingTop: "100px" }}>
      <h2>Espace Abonné</h2>

      <div className="dashbord">
        <div className="menu">
          <h2>QuizGame</h2>
          <div className="profil-menu">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle"
              height="70"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />

            <div className="nom-prenom">
              <h4>{user.nom}</h4>
              <h4>{user.prenom}</h4>
            </div>
            <p className="status">Quizzer Actif</p>
          </div>
          <nav>
            <ul>
              <a>
                <li onClick={()=>setDisplay(1)}>Profil</li>
              </a>
              <a>
                <li onClick={()=>setDisplay(2)}>Quiz Joué</li>
              </a>
              <a>
                <li onClick={()=>setDisplay(3)}>Commentaire</li>
              </a>
            </ul>
          </nav>
        </div>
       
    {(display ===1) && (edit === true) ? (
      <UpdateUser  user= {user}/> 
    )
    : ((display ===1) && (edit === false)) ? (
        <div className="contenair-espace">
          <h2>Profil Utilisateur</h2>
          <div className="contenair-info">
            <div className="info-perso">
              <h3>Informations personnelles </h3>

              <ul>
                <li className="line-inf separateur">
                  <div>
                    <span>Nom :</span> {user.nom}
                  </div>
                  <div className="edit-button" onClick={() => setEdit(true)}>
                    Edit
                  </div>
                </li>
                <li className="line-inf separateur">
                  <div>
                    <span>Prenom :</span> {user.prenom}
                  </div>
                  <div className="edit-button" onClick={() => setEdit(true)}>
                    Edit
                  </div>
                </li>
                <li className="line-inf">
                  <div>
                    <span>Pseudo : </span> {user.pseudo}
                  </div>
                  <div className="edit-button" onClick={() => setEdit(true)}>
                    Edit
                  </div>
                </li>
              </ul>

            </div>
            <div className="coordonne">
              <h3>Coordonnées</h3>
              <ul>
                <li>
                  <div className="edit-button" onClick={() => setEdit(true)}>
                    Edit
                  </div>
                  <div>  <span>Email : </span> {user.email}</div>
                
                </li>
              </ul>
            </div>
            <div className="autre-info">
              <h3>Autres info</h3>
              <ul>
                <li>
                  <div>

                  <span>Date de création du compte : </span> {user.dateCreation}

                  </div>
                </li>
                {/* <li><span>Nombre de quiz joué : </span>  {user.quizdones.length}</li> */}
              </ul>

            </div>
          </div>
        </div>
 )
:(display == 2) ?(
  <QuizDone  ids={ids}/>
):(

  <div>

  <span>Comming soon </span>

  </div>
)

}
      </div>
    </div>
  );
};

export default EspaceAbonne;
