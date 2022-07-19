import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import '../style/BestQuiz.css';

const BestQuiz = () => {
  const [quiz, setQuiz] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8082/api/quiz/find/1")
      .then((result) => setQuiz(result.data));
  }, {});
  return (
    <div className="bestquiz mb-5">
        <div className="card border-0" style={{width:"50%"}}>
  <img className="card-img-top" src={quiz.image} alt="Card image cap" />
  <div className="card-body">
    <h3 className="card-title"><a href="#">{quiz.titre}</a></h3>
  </div>
</div>
</div>
        
      )} 

export default BestQuiz;


  