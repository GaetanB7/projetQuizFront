import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/Quizs.css";
import { Link } from "react-router-dom";

const Quizs = () => {
  const [quizs, setQuizs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8082/api/quiz")
      .then((result) => setQuizs(result.data));
  }, []);
  return (
    <div className="container-fluid mt-5" style={{ paddingTop: "150px" }}>
      <div className="row d-flex">
        {quizs.map((quiz) => (
          <div key={quiz.id} className="col-12 col-sm-3 col-md-3 mb-5">
            <Link to={`/quiz/${quiz.id}`}>
              <div
                className="card border-0 Quizs-card"
                style={{ width: "24rem", backgroundColor: "rgba(0, 0, 0, 0)" }}
              >
                <div className="card-top">
                  <img
                    className="card-img-top"
                    style={{ height: "230px" }}
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
