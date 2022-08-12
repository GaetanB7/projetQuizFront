import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/QuizDone.css";

const QuizDone = ({ ids }) => {
  const [quizDone, setQuizDone] = useState([]);
  const [afficheScore, setAfficheScore] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/quizdone/find/${ids}`)
      .then((result) => setQuizDone(result.data));
  }, []);

  console.log(quizDone);
  console.log(quizDone[1]);

  return (
    <div className="quizdone">
      <h2>Score</h2>
      <div className="nb-quiz">Vous avez joué en tout à : {quizDone.length} Quizs!</div>

      <h3>Voici vos 10 derniers scores</h3>

      <div className="tab-score">
        <table class="table table-dark table-hover table-borderless">
          <thead>
            <tr>
              <th scope="col">Categorie</th>
              <th scope="col">Quiz</th>
              <th scope="col">Score</th>
              <th scope="col">Niveau</th>
            </tr>
          </thead>
          <tbody>
            {quizDone
              .slice(quizDone.length - 10, quizDone.length)
              .map((quiz, index) => (
                <tr key={index}>
                  <td>{quiz.quiz.categorie.titre}</td>
                  <td>{quiz.quiz.titre}</td>
                  <td>{quiz.score}/{quiz.quiz.questions.length}</td>
                  <td>{quiz.quiz.niveau}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuizDone;
