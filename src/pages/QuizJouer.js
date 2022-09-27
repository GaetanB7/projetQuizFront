import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../style/QuizJouer.css";
import { getId, hasAuthenticated, url } from "../services/AuthApi";


let point=0;
const QuizJouer = () => {
  const { id } = useParams();
  const [start, setStart] = useState(true);
  const [i, seti] = useState(0);
  const [quiz, setQuiz] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [user, setUser] = useState();

 console.log("i")
 console.log(i)


  const getQuiz = () => {
    axios
      .get(url+`/api/quiz/find/${id}`)
      .then((result) => setQuiz(result.data));
  };

  useEffect(() => {
    getQuiz();

    if(hasAuthenticated()){
      const ids = getId();
      axios
      .get(url+`/api/user/find/${ids}`)
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
    // console.log("tabResult: ");
    // console.log(tabResult);
    // console.log("valid: ");
    // console.log(valid);

    

         if(JSON.stringify(tabResult) === JSON.stringify(valid)){
            
               // (score+1);
                point=point+1;     
           
         }
           
}



  const startQuiz = () => {
    if ((start == false) && ( [i]!= quiz.questions.length) ) {
      return (
        <div style={{ width: "100%" }}>


<div className="card border-0" style={{maxWidth:"100%", backgroundColor:"rgb(0,0,0,0)"}}>
<h5 className="nb-question">{[i+1]} / {quiz.questions.length}</h5>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={quiz.questions[i].image} className="img-fluid height: auto  img-question"  alt="..."/>
    </div>
    <div className="col-md-8 card-question">
      <div className="card-body">
        <h3 className="card-text">{quiz.questions[i].description}</h3>
      </div>
    </div>
  </div>
</div>
          <ul className="liste-question">
            {quiz.questions[i].reponses.map((value, index) => {
              return <div key={index} className=" box-reponse" >
                        <input type="checkbox" className="btn-check" name="box" id={`${index}`} autoComplete="off"/>
                        <label className="btn btn-outline-primary btn-reponse" htmlFor={`${index}`} >{value.description}</label>
                     </div> 
              
            })}
          </ul>
          {!start &&(
        
        <button className="btn btn-success mt-4 btn-block btn-lg btn-valider" type="submit" onClick={click}>
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
        // console.log(formScore)
        axios.post(url+"/api/quizdone/add", formScore).then(
          (response) => {
            console.log(response);
          },
          (response) => {
            console.log(response.response.data);
          }
        );

      }


        return(
            <div className="affichage-finquiz">
                {/* <h2>Quiz Terminé</h2> */}
                <h3>Merci d'avoir joué!</h3>
                <h2>Votre score est de <br /> <span>{point}/{quiz.nbQuestion}</span></h2>
          <Link to={"/quizs"}>
              <button type="button" className="btn btn-success mt-4 btn-block btn-lg" onClick={() => setStart(!start)} style={{ width: "80%" ,height:"60px"}}>
              Suivant
            </button>
          </Link>

            </div>
        )
    }else if(((start == false) && (quiz.questions.length == 0) )){
        return(
          <div>
            <h2 >Coming soon...</h2>
            <Link to={"/quizs"}>
              <button type="button" className="btn btn-success mt-4 btn-block btn-lg" onClick={() => setStart(!start)} style={{ width: "40%" ,height:"60px"}}>
              Retour
            </button>
          </Link>
          </div>

        )
    }
  };

  return (
    <div className=" quiz-jouer" >
      <div className="cardQuiz text-center">
        {start && (
          <div className=" text-center content-card" >
            <h2>
              {quiz.titre}
            </h2>
            <h4>Niveau : <span className="text-muted"> {quiz.niveau}</span></h4>
            <h3>Nombre de questions : {quiz.nbQuestion}</h3>
            <h3>Categorie : {quiz.categorie && quiz.categorie.titre}</h3>
            <img src={quiz.image} alt="" /> <br/>
            <button type="button" className="btn btn-success mt-4 btn-block btn-lg" onClick={() => setStart(!start)}>
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
