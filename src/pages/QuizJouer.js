import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../style/QuizJouer.css";
import { Collapse } from "bootstrap";
import { tab } from "@testing-library/user-event/dist/tab";

let point=0;
const QuizJouer = () => {
  const { id } = useParams();
  const [start, setStart] = useState(true);
  const [i, seti] = useState(0);
  const [quiz, setQuiz] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);

  const getQuiz = () => {
    axios
      .get(`http://localhost:8082/api/quiz/find/${id}`)
      .then((result) => setQuiz(result.data));
  };

  useEffect(() => {
    getQuiz();
  }, [start]);

  const increment = () => {
    seti(i + 1);
  }

const recupValeurs = () =>{
    let rep = quiz.questions[i].reponses;

    let valid = rep.map((rep) => rep.valid)

    let nq = document.getElementsByName('box');
    let result = "";
    let tabResult =[];


    for(let i =0; i<nq.length ;i++ ){
        if (nq[i].checked) {
            result = nq[i].id;
            tabResult.push(true);
         }else{
            result = nq[i].id;
            tabResult.push(false);
         }
    }
    //setScore(result+score);
    console.log("tabResult: ");
    console.log(tabResult);
    console.log("valid: ");
    console.log(valid);

    

         if(JSON.stringify(tabResult) == JSON.stringify(valid)){
             
                point=point+1;;
                console.log("je passe plusieur fois dedans"+point);        
           
         }
           
}
console.log("le score est de :" +point);
  const startQuiz = () => {
    if ((start == false) && ( [i]!= quiz.questions.length) ) {
      return (
        <div style={{ width: "100%" }}>
            <h4>Question : {[i]} / {quiz.questions.length}</h4>
          <h3>{quiz.questions[i].description}</h3>
          <ul>
            {quiz.questions[i].reponses.map((value, index) => {
              return <div className="m-4" >
                        <input type="checkbox" className="btn-check" name="box" id={`${index}`} autocomplete="off" style={{ width: "100%" }}/>
                        <label className="btn btn-primary" for={`${index}`} style={{ width: "100%" }} >{value.description}</label>
                     </div> 
              
            })}
          </ul>
          {!start &&(
        <button className="btn btn-success mt-4 btn-block btn-lg" onClick={() => seti(i + 1)} style={{ width: "80%" ,height:"60px",}}>valider
</button>


            )}
                    <button className="btn btn-success mt-4 btn-block btn-lg" onClick={recupValeurs()} style={{ width: "80%" ,height:"60px",}}>
          Valider
        </button>
        </div>
      );
    }
    else if ([i]>0){
        return(
            <div>
                <h2>Quiz Terminé</h2>
                <h3>Merci d'avoir joué!</h3>
                <h2>Votre score est de {point} !</h2>

            </div>
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
            </button>
          </div>
        )}

        {startQuiz()}


      </div>
    </div>
  );
};

export default QuizJouer;
