import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style/BestQuiz.css";
import { url } from "../services/AuthApi";


const BestQuiz = () => {
  const [quiz, setQuiz] = useState({});


  useEffect(() => {
    console.log("API");

    let randomQuiz = Math.floor((Math.random() * 3)+1);
    console.log(randomQuiz)
    axios
      .get(`http://localhost:8082/api/quiz/find/${randomQuiz}`)
      .then((result) => setQuiz(result.data));
  }, {});



  console.log(quiz);
  return (
    <Link to={`/quiz/${quiz.id}`}>
      <div className="bestquiz mb-5" style={{ backgroundColor:"rgb 0 0 0 0" }}>
        <div className="card" style={{ width: "50%" }}>
          <img src={quiz.image} alt="Card image cap" />
          <h3 className="card-titre">
            Le meilleur quiz de la semaine : <br />
            <span>{quiz.titre}</span>
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default BestQuiz;
