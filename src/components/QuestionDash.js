import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { url } from '../services/AuthApi';
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";

const QuestionDash = () => {


  const initialFormData = Object.freeze({
  quiz:{
    id:null,
    titre:""
  }
  });

  const initialServiceList = Object.freeze([
    {
      description: "",
      image: "",
      numOrder: "",
      reponses: [],
      multiple: false,
      quiz:{
        id:null
      },
      // idQuestion:null,
      // isSend:false
    },
  ]);

  const initialQuestion = Object.freeze(
    {
      description: null,
      image: null,
      numOrder: "",
      reponses: [],
      multiple: false,
      quiz:{
        id:null
      }
    },
  );

  const initialIdQuestion = Object.freeze(
    [{
      idQuestion:null,
      isSend:false
    }]
  );


  // const [formData, updateFormData] = useState(initialFormData);
   const [quizSelect, setQuizSelect] = useState(initialFormData);
   const [serviceList, setServiceList] = useState(initialServiceList);
   const [question, setQuestion] = useState(initialQuestion);
   const [idQuestion, setIdQuestion] = useState(initialIdQuestion);

  const [quizs, setQuizs] = useState([]);

  useEffect(() => {
    axios
    .get(url+`/api/quiz`)
    .then((result) => setQuizs(result.data));

  }, []);
  
  
  let optionQuiz = quizs.map( res =>( { value: res, label: res.titre, name: "quiz" }))

  
  // const handleChange = (e) => {
  //   updateFormData({
  //     ...formData,
  //     // Trimming any whitespace
  //     [e.target.name]: e.target.value.trim(),
  //   });
  // };
  
  const handleSubmit = (e,index) => {
    e.preventDefault();
    axios
    .post(url + "/api/question/add", question)
    .then((response) => {
      toast.success(response);
      toast.success("Quiz mis  jour!")
      handleServiceAdd()
 

      const list =[...idQuestion];
      list[index].idQuestion = response.data.id
      list[index].isSend = true
      console.log("list")
      console.log(list)
      setIdQuestion(...list)

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

 

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    list[index].quiz.id=quizSelect.quiz.id;
    setServiceList(list);
    setQuestion(list[index]);
  };


  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
    if(idQuestion[index].idQuestion !== null){
      const id = idQuestion[index].idQuestion;
    axios
    .delete(url + `/api/question/delete/${id}`)
    .then(toast("question supprimé"))}
  };

  const handleServiceAdd = () => {
    setIdQuestion([
      ...idQuestion,
      {
        idQuestion:null,
        isSend:false
      },
    ])
    setServiceList([
      ...serviceList,
      {
        description: "",
        image: "",
        numOrder: "",
        reponses: [],
        multiple: false,
        quiz:{
          id:quizSelect.quiz.id
        }
      },
    ])
    console.log("idQuestion")
    console.log(idQuestion)
    console.log("serviceList")
    console.log(serviceList)
  };

  return (
    <div className="main">
      <div className="content">
        <div className="card-cat">
          <h2>Ajouter des questions/reponses</h2>
          <div className="formulaire">

            <form action="">

              <div className='champ-form'>

                <label htmlFor="quiz">Quiz</label>
                <Select onChange={handleSelect} options={optionQuiz} />
              </div>
  
{
  quizSelect.quiz.id != null ?(
    <div className="AddQuestion">
    <div className="form-field">
      <label htmlFor="service">Question(s)</label>
      {serviceList.map((singleService, index) => (
        <div key={index} >
          <div className="services service-question">
          <div className="first-division">
            <label htmlFor="description">Question {index + 1}</label>
            <input
              name="description"
              type="text"
              id="description"
              disabled={idQuestion[index] === undefined ? "" :  ((idQuestion[index].isSend === true )? "disable" :"") }
              value={singleService.description}
              onChange={(e) => handleServiceChange(e, index)}
              required
            />
            <label htmlFor="image">image</label>
            <input
              name="image"
              disabled={idQuestion[index] === undefined ? "" :  ((idQuestion[index].isSend === true )? "disable" :"") }
              type="text"
              id="image"
              value={singleService.image}
              onChange={(e) => handleServiceChange(e, index)}
              required
            />
          </div>
          
          <div className="second-division">
            {serviceList.length !== 1 && (
              <div
                onClick={() => handleServiceRemove(index)}
                className="remove-btn"
              >
                <span>Supprimer la question</span>
              </div>
              
            )}
            </div>
          </div>
          {serviceList.length - 1 === index && (
            <div className="ajout-question">
              <div className="btn-ajout-question" onClick={(e)=>handleSubmit(e,index)}>
                <h3>Ajoutez une autre question?</h3>
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
  ):(
  <div>
  Veuillez selectionner un quiz
</div>

  )
}
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