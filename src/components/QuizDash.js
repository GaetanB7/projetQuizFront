import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../services/AuthApi";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";
import AddQuestion from "./AddQuestion";

const QuizDash = () => {


  const initialFormData = Object.freeze({
    titre: "",
    image: "",
    questions: [],
  });

  const initialNiveauCat = Object.freeze({
    niveau: "FACILE",
    categorie:{}
  });

  const options = [
    { value: "FACILE", label: "Facile", name: "niveau" },
    { value: "INTERMEDIAIRE", label: "Moyen", name: "niveau" },
    { value: "DIFFICILE", label: "Difficile", name: "niveau" },
  ];

  const [formData, updateFormData] = useState(initialFormData);
  const [niveauCat, setNiveauCat] = useState(initialNiveauCat);
  const [addBtnQuestion, setAddBtnQuestion] = useState(false);
  const [categorie, setCategorie] = useState([]);

  useEffect(() => {
    axios
    .get(url+`/api/categories`)
    .then((result) => setCategorie(result.data));

  }, []);
  
  
  let optionCat = categorie.map( res =>( { value: res, label: res.titre, name: "categorie" }))
  console.log(niveauCat);
  
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    var res = Object.assign({}, niveauCat, formData);
    console.log("res")
    console.log(res)
    axios
    .post(url + "/api/quiz/add", res)
    .then((response) => {
      toast.success(response);
      toast.success("Quiz mis  jour!")
      console.log(response)
    })
    .catch((response) => {
      console.log(response);
      toast.error(response.response.data);
    });
  };
  const handleSelect = (e) => {
    setNiveauCat({
      ...niveauCat,
      [e.name]: e.value
    });
  };

console.log(addBtnQuestion)
  return (
    <div className="main">
      <div className="content">
        <div className="card-cat">
          <h2>Ajouter un quiz</h2>
          <div className="formulaire">

            <form action="">

              <div className="champ-form">
                <label htmlFor="niveau">Niveau</label>
                <Select options={options} onChange={handleSelect} />
              </div>

              <div className='champ-form'>

                <label htmlFor="categorie">Categorie</label>
                <Select onChange={handleSelect} options={optionCat} />
              </div>

              <div className="champ-form">
                <label htmlFor="titre">Nom du quiz</label>
                <input name="titre" type="text" onChange={handleChange} />
              </div>

              <div className="champ-form">
                <label htmlFor="image">Lien de l'image</label>
                <input name="image" type="text" onChange={handleChange} />
              </div>

        {addBtnQuestion &&(
          <AddQuestion />
        )

        }

{!addBtnQuestion &&(
          
              <div className="ajout-question">
                <div className="btn-ajout-question" onClick={()=>setAddBtnQuestion(!addBtnQuestion)}>
                  <h3>Ajoutez une question?</h3>
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
        )

      }
              <div className="box-btn-valider">
                <div className="button btn-quizDash" onClick={handleSubmit}>
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

export default QuizDash;
