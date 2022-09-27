import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { url } from '../services/AuthApi';
import { ToastContainer, toast } from "react-toastify";


const CategorieDash = () => {

    const [categorie, setCategorie] = useState([]);

useEffect(() => {
    axios
    .get(url+`/api/categories`)
    .then((result) => setCategorie(result.data));
}, []);

const initialFormData = Object.freeze({
    titre: "",
    image: ""
  });

const [formData, updateFormData] = useState(initialFormData);

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
    axios
    .post(url+"/api/categories/add", formData)
    .then(
      (response) => {
        toast.error(response.response.data);
        console.log("Cat mis  jour!")
      },
    ).catch((response) => (
      toast.error(response.response.data)
    ));
  }

    return (
      <div className="main">
        <div className="content">
            <div className="card-cat">
            <h2>Ajouter Categorie</h2>
            <div className='formulaire'>

                <form action="">
                    <div className='champ-form'>
                        <label htmlFor="">Nom de la categorie</label>
                        <input  name="titre" type="text" onChange={handleChange} />
                    </div>
                    <div className='champ-form'>
                        <label htmlFor="">Lien de l'image</label>
                        <input name="image" type="text" onChange={handleChange} />
                    </div>
                    <div className='box-btn-valider'>
                    <div className='button' onClick={handleSubmit}>
                        Valider
                    </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
        {/* <h2 className='gros-titre-dash'>Categories</h2>
            <div className='cardBox'>
            {categorie.map((cat)=>
            <div key={cat.id} className="card">
                <div className="titre-cat">
                {cat.titre}
                </div>
            </div>
            )}
            </div> */}
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

export default CategorieDash;