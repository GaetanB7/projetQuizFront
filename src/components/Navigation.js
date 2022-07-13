import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <h2>Navigation</h2>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/quizs">QuizCat</NavLink>
                    </li>
                    <li>
                        <NavLink to="/connexion">Connexion</NavLink>
                    </li>
                    <li>
                        <NavLink to="/inscription">Inscription</NavLink>
                    </li>
                    <li>
                        <NavLink to="/espace">Mon Espace</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default Navigation;