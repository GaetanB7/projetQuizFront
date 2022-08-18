import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate  } from 'react-router-dom';
import { url } from "../services/AuthApi";


const UpdateUser = ({user}) => {

    const history = useNavigate ()
    const [formData, setFormData] = useState({
          User: "ABO",
  id:user.id,
  nom: user.nom,
  prenom: user.prenom,
  pseudo: user.pseudo,
  email: user.email,
  password: user.password,
  confirmPassword: user.confirmPassword,
  dateCreation: user.dateCreation,
  dateNaissance:user.dateNaissance,
  avatar: user.avatar,
  enabled : user.enabled,
  valid :user.valid,
  username : user.username,
  credentialsNonExpired : user.credentialsNonExpired,
  accountNonExpired :user.accountNonExpired,
  authorities :user.authorities,
  accountNonLocked : user.accountNonLocked

    });
    console.log("formData")
    console.log(formData)
    const handleSubmit = (e) => {
        console.log("hadle submit")
        console.log(formData)
        e.preventDefault();
    
        axios.put(url+"/api/user/update", formData).then(
          (response) => {
            console.log(response.data)
            toast.success(response.data)
            history("../espace"); 
            window.location.reload()
          },
          (response) => {
            toast.error(response.response.data);
      
    
          }
        ); 
      };
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value.trim(),
        });
      };

    return (
            <div className="modif-contenaire">

<h2>Modification du profil</h2>
<form action="#" className="formulaire-upadate">
    <div className="champ-update">

    <div className="form-group d-flex align-items-center">
        <div>Nom</div>
      <input
        autocomplete="off"
        type="text"
        className="form-control"
        name="nom"
        onChange={handleChange}
        placeholder="Nom"
        defaultValue={user.nom}
      />
    </div>

    <div className="form-group d-flex align-items-center">
    <div>Prenom</div>
      <input
        autocomplete="off"
        type="text"
        className="form-control"
        name="prenom"
        onChange={handleChange}
        placeholder="Prenom"
        defaultValue={user.prenom}
      />
    </div>

    <div className="form-group d-flex align-items-center">
    <div>Pseuso</div>
      <input
        autocomplete="off"
        type="text"
        className="form-control"
        name="pseudo"
        onChange={handleChange}
        placeholder="Pseudo"
        defaultValue={user.pseudo}
      />
    </div>

    <div className="form-group d-flex align-items-center">
    <div>Email</div>
      <input
        type="email"
        className="form-control"
        name="email"
        onChange={handleChange}
        placeholder="Email"
        defaultValue={user.email}
      />
    </div>
    <div className="btn btn-primary mb-3" onClick={handleSubmit}>
      Mettre à jour
    </div>
    </div>
    </form>
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

export default UpdateUser;