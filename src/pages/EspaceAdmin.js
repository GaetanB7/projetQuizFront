import React, { useEffect } from 'react';
import { useState } from 'react';
import "../style/EspaceAdmin.css";
import axios from 'axios';
import { url } from '../services/AuthApi';
import Dashbord from '../components/Dashbord';
import CategorieDash from '../components/CategorieDash';
import QuizDash from '../components/QuizDash';
import QuestionDash from '../components/QuestionDash';



const EspaceAdmin = () => {


    const [abo, setAbo] = useState([]);
    const [quizDone, setQuizDone] = useState([]);
    const [quiz, setQuiz] = useState([]);
    const [indexDashbord, setIndexDashbord] = useState(1);
    
    useEffect(() => {
        axios
        .get(url+`/api/user`)
        .then((result) => setAbo(result.data));

        axios
        .get(url+`/api/quizdone`)
        .then((result) => setQuizDone(result.data));

        axios
        .get(url+`/api/quiz`)
        .then((result) => setQuiz(result.data));
    }, []);
    



    return (
        <div className='espace-admin'>
            <div class="containere">
        <div class="navigation">
            <ul>
                <li onClick={()=>setIndexDashbord(1)}>
                    <a href="#">
                        
                        <span class="title">Quiz Game Dashbord</span>
                    </a>
                </li>

                <li onClick={()=>setIndexDashbord(1)}>
                    <a href="#">
                        <span class="icon">
                        <i class="fa-solid fa-house"></i>
                        </span>
                        <span class="title">Dashboard</span>
                    </a>
                </li>

                <li onClick={()=>setIndexDashbord(2)}>
                    <a href="#">
                        <span class="icon">
                        <i class="fa-solid fa-users"></i>
                        </span>
                        <span class="title">Utilisateurs</span>
                    </a>
                </li>

                <li onClick={()=>setIndexDashbord(3)}>
                    <a href="#" >
                        <span class="icon">
                        <i class="fa-solid fa-comments"></i>
                        </span>
                        <span class="title">Commentaires</span>
                    </a>
                </li>

                <li onClick={()=>setIndexDashbord(4)}>
                    <a href="#" >
                        <span class="icon">
                        <i class="fa-solid fa-c"></i>
                        </span>
                        <span class="title">Categorie</span>
                    </a>
                </li>

                <li onClick={()=>setIndexDashbord(5)}>
                    <a href="#">
                        <span class="icon">
                        <i class="fa-solid fa-q"></i>
                        </span>
                        <span class="title">Quiz</span>
                    </a>
                </li>

                <li onClick={()=>setIndexDashbord(6)}>
                    <a href="#">
                        <span class="icon">
                        <i class="fa-solid fa-question"></i>
                        </span>
                        <span class="title">Q/R</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </span>
                        <span class="title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>
        {
            indexDashbord == 1 ?
            <div>
                <Dashbord abo={abo} quizDone={quizDone} quiz={quiz}/>
            </div>
            : indexDashbord ==4 ?
            <div>
                <CategorieDash />
            </div>
            : indexDashbord ==5 ?
            <div>
                <QuizDash />
            </div>
            : indexDashbord ==6 ?
            <div>
                <QuestionDash />
            </div>
            :
            <div>
                    comming soon
            </div>
        }
 
    </div>
        </div>
    );
};

export default EspaceAdmin;