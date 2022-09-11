import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/Quizs.css";
import { Link } from "react-router-dom";
import { url } from "../services/AuthApi";

const Quizs = () => {
  const [quizs, setQuizs] = useState([]);
  useEffect(() => {
    axios
      .get(url+"/api/quiz")
      .then((result) => setQuizs(result.data));
  }, []);
  return (
    <div>
      <h2 className="titre-quizCat">Les quizs :</h2>
      <div className="quiz-carte">
        {quizs.map((quiz) => (
          <div key={quiz.id} className="carte-globale">
            <Link to={`/quiz/${quiz.id}`}>
              <div
                className="card border-0 Quizs-card"
              >
                <div className="card-top">
                  <img
                    className="card-img-top"
                    src={quiz.image}
                    alt="Card image cap"
                  />
                </div>
                <div className="card-bottom">
                  <h4 className="card-text">{quiz.titre}</h4>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quizs;
