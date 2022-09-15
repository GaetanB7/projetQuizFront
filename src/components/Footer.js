
import React from 'react'
import '../style/Footer.css';
import { Link } from "react-router-dom";


const Footer = () => (

    <div className="contenu-footer">
        <footer className="footercontenu">


            <div className="footer-top" >


                <div className="logo-footer">
                    <img className='logoFooter' alt="logo" src="images/Quiz-Game-15-07-2022.png" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, iure dicta. Commodi, quae distinctio nisi itaque molestias ducimus voluptate hic minus, quidem error incidunt consequuntur velit? Ipsum eos ipsa repellendus!</p>
                </div>


                <div className="footer-nav">
                    <h4>Navigation</h4>

                    <Link className="lien" to="/quizs">
                    <h5>Quiz</h5>
                    </Link>
                    <Link className="lien" to="/categories">
                    <h5>Categorie de quiz</h5>
                    </Link>
                    <Link className="lien" to="/contact">
                    <h5>Contact</h5>
                    </Link>
                </div>

                <div className='footer-inscription'>
                    <h4>
                        Inscription
                    </h4>
                    <p>
                        Toujours pas de compte? <br /> <Link className="lien-inscription" to="/inscription">
                        Inscrivez vous
                    </Link> maintenant et profiter de plein de nouvelles fonctionalité
                    </p>
                </div>

                </div>

                <div className="footer-mid" >
                    <div className="reseau ">
                    
                    <h3>Suivez nous sur les réseau!</h3>
                        <ul className="liste-media">
                            {/* <div className="col-4 d-flex justify-content-center text-center"> */}

                            <li><span className="fab fa-facebook-f"></span>
                            </li>

                            <li> <span className="fab fa-youtube"></span>
                            </li>
                            
                            <li> <span className="fab fa-instagram"></span>
                            </li>
                            
                            <li> <span className="fab fa-twitter"></span>
                            </li>

                            <li> <span className="fab fa-google"></span>
                            </li>
                            
                            <li> <span className="fab fa-pinterest"></span>
                            </li>
                        </ul>
                    </div>

            </div>

            <div className="row copy">

                <div className="col-12 col-md-5">
                    <h5 className='m-2 text-center'> Copyright QuizzGame 2022 </h5>
                </div>
                <div className="cgu-footer">
                <Link to='quiz/cgu' className="lien-cgu">
                    <h5> Mention legale</h5>
                    </Link>
                    <Link to='quiz/cgu' className="lien-cgu">
                    <h5> Politique de confidentialité</h5>
                    </Link>
            </div>
            </div>


        </footer >
    </div >
)

export default Footer;
