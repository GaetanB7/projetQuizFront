import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { url } from '../services/AuthApi';
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";

const QuestionDash = () => {


  // const initialFormData = Object.freeze({
  //   id: "",
  //   titre: "",
  //   image: [],
  // });

  const initialNomQuiz = Object.freeze({
    quiz: {
      questions:[]
    }
  });


  // const [formData, updateFormData] = useState(initialFormData);
   const [quizSelect, setQuizSelect] = useState(initialNomQuiz);

  const [quizs, setQuizs] = useState([]);

  useEffect(() => {
    axios
    .get(url+`/api/quiz`)
    .then((result) => setQuizs(result.data));

  }, []);
  
  
  let optionQuiz = quizs.map( res =>( { value: res, label: res.titre, name: "quiz" }))
  console.log(quizSelect);
  
  // const handleChange = (e) => {
  //   updateFormData({
  //     ...formData,
  //     // Trimming any whitespace
  //     [e.target.name]: e.target.value.trim(),
  //   });
  // };
  
  const handleSubmit = (e) => {
    e.preventDefault();
   // var res = Object.assign({}, niveauCat, formData);
    // console.log("res")
    // console.log(res)
    axios
    .post(url + "/api/quiz/add", quizSelect)
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
    setQuizSelect({
      ...quizSelect,
      [e.name]: e.value
    });
  };

 

  return (
    <div className="main">
      <div className="content">
        <div className="card-cat">
          <h2>Ajouter un quiz</h2>
          <div className="formulaire">

            <form action="">

              <div className='champ-form'>

                <label htmlFor="quiz">Quiz</label>
                <Select onChange={handleSelect} options={optionQuiz} />
              </div>
  


              <div className="box-btn-valider">
                <div className="button" onClick={handleSubmit}>
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

export default QuestionDash;