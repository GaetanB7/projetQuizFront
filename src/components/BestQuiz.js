import React, {useEffect, useState } from "react";
import axios from "axios";
import '../style/BestQuiz.css';

const BestQuiz = () => {
  const [quiz, setQuiz] = useState({});
  useEffect(() => {
    console.log("API");
    axios
      .get("http://localhost:8082/api/quiz/find/1")
      .then((result) => setQuiz(result.data));
  }, {});
console.log(quiz);
  return (

    <div className="bestquiz mb-5">
        <div className="card border-0" style={{width:"50%"}}>
  <img className="card-img-top" src={quiz.image} alt="Card image cap" />
  <div className="card-body">
    <h3 className="card-title"><a href="#">{quiz.titre}</a></h3>
     {/* <h2>{quiz.questions.map((question)=> question.description)}</h2> */}
  </div>
</div>
</div>
        
      )} 

export default BestQuiz;


  