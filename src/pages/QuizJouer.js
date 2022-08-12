import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../style/QuizJouer.css";
import { getId, hasAuthenticated } from "../services/AuthApi";


let point=0;
const QuizJouer = () => {
  const { id } = useParams();
  console.log("id:"+id);
  const [start, setStart] = useState(true);
  const [i, seti] = useState(0);
  const [quiz, setQuiz] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [user, setUser] = useState();




  const getQuiz = () => {
    axios
      .get(`http://localhost:8082/api/quiz/find/${id}`)
      .then((result) => setQuiz(result.data));
  };

  useEffect(() => {
    getQuiz();

    if(hasAuthenticated()){
      const ids = getId();
      axios
      .get(`http://localhost:8082/api/user/find/${ids}`)
      .then((result) => setUser(result.data));
    }
  }, [start]);

  const click = () => {
    increment();
    recupValeurs();
  }

  const increment = () => {
    seti(i + 1);
  }

const recupValeurs = () =>{

    let rep = quiz.questions[i].reponses;
    let valid = rep.map((rep) => rep.valid)
    console.log("valeur de i"+i);

    let nq = document.getElementsByName('box');
    let tabResult =[];


    for(let j =0; j<nq.length ;j++ ){
        if (nq[j].checked) {
            tabResult.push(true);
            nq[j].checked = false;
         }else{
            tabResult.push(false);
         }
    }
    //setScore(result+score);
    console.log("tabResult: ");
    console.log(tabResult);
    console.log("valid: ");
    console.log(valid);

    

         if(JSON.stringify(tabResult) === JSON.stringify(valid)){
            
               // (score+1);
                point=point+1;     
           
         }
           
}
console.log("le score est de :" +point);



  const startQuiz = () => {
    if ((start == false) && ( [i]!= quiz.questions.length) ) {
      return (
        <div style={{ width: "100%" }}>


<div className="card mb-3 border-0" style={{maxWidth:"100%", backgroundColor:"rgb(0,0,0,0)"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={quiz.questions[i].image} className="img-fluid height: auto rounded" style={{ width: "70%" }} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{[i+1]} / {quiz.questions.length}</h5>
        <h3 className="card-text">{quiz.questions[i].description}</h3>
      </div>
    </div>
  </div>
</div>




          <ul>
            {quiz.questions[i].reponses.map((value, index) => {
              return <div className="m-4" >
                        <input type="checkbox" className="btn-check" name="box" id={`${index}`} autocomplete="off" style={{ width: "100%" }}/>
                        <label className="btn btn-outline-primary" for={`${index}`} style={{ width: "100%" , fontSize:"20pt"}} >{value.description}</label>
                     </div> 
              
            })}
          </ul>
          {!start &&(
        
        <button className="btn btn-success mt-4 btn-block btn-lg" type="submit" onClick={click} style={{ width: "30%" ,height:"60px",}}>
        Valider
      </button>

            )}


        </div>
      );
    }
    else if ([i]>0){

      if(hasAuthenticated()){

        
        const dateRow = new Date()
        const date = dateRow.getDate()+"/"+(dateRow.getMonth()+1)+"/"+dateRow.getFullYear()

        const formScore ={
          "score": point,
          // "dateQuiz": date,
          "abonne": user,
          "quiz": quiz
        }
        console.log(formScore)
        axios.post("http://localhost:8082/api/quizdone/add", formScore).then(
          (response) => {
            console.log(response);
          },
          (response) => {
            console.log(response.response.data);
          }
        );

      }


        return(
            <div>
                <h2>Quiz Terminé</h2>
                <h3>Merci d'avoir joué!</h3>
                <h2>Votre score est de {point}/{quiz.nbQuestion} !</h2>
          <Link to={"/quizs"}>
              <button type="button" className="btn btn-success mt-4 btn-block btn-lg" onClick={() => setStart(!start)} style={{ width: "80%" ,height:"60px"}}>
              Suivant
            </button>
          </Link>

            </div>
        )
    }else{
        return(
        // <h2  style={{ fontSize: "150pt" , textAlign:"center",marginTop:"200px"}}>Coming soon...</h2>
        <h2></h2>
        )
    }
  };

  return (
    <div className="container-fluid mt-5" style={{ paddingTop: "100px" }}>
      <div className="cardQuiz text-center">
        {start && (
          <div className=" text-center" style={{ width: "100%" }}>
            <h2>
              {quiz.titre}
            </h2>
            Niveau : <span className="text-muted"> {quiz.niveau}</span>
            <h3>Nombre de questions : {quiz.nbQuestion}</h3>
            <h1>Categorie : {quiz.categorie && quiz.categorie.titre}</h1>
            <img src={quiz.image} alt="" style={{ width: "35%" ,border:"1px", borderRadius:"15px"}}/> <br/>
            <button type="button" className="btn btn-success mt-4 btn-block btn-lg" onClick={() => setStart(!start)} style={{ width: "80%" ,height:"60px"}}>
              Demarrer
              <div className="visually-hidden">
              {
                    point=0
                }
              </div>

            </button>
          </div>
        )}

        {startQuiz()}


      </div>
    </div>
  );
};

export default QuizJouer;
