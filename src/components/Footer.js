
import React from 'react';
import '../style/Footer.css';
import Logo from './Logo';


const Footer = () => (

    <div className="contenu-footer">
        <footer className="footercontenu">


            <div className="row m-2" >


                <div className="col-12 col-md-2 mt-5">
                    <img className='logoFooter' alt="logo" src="images/Quiz-Game-15-07-2022.png" />
                </div>


                <div className="col-12 col-md-3 mt-5  d-flex">
                    <a className="lien" href="#">
                        <h5>Contact</h5>
                    </a>
                    <a className="lien" href="#">
                        <h5> CGU</h5>
                    </a>
                </div>

                <div className="col-12 col-md-4 mt-5" >
                    <div className="reseau ">
                        <h5> <span className='ms-5'>Nous rejoindre sur les réseaux</span></h5>
                        <ul className="liste-media">
                            {/* <div className="col-4 d-flex justify-content-center text-center"> */}

                            <li><a href="https://fr-fr.facebook.com/pages/category/Interest/Quiz-Planet-179412132827704/">
                                <img className='socialMedia' src="images/instagram.png" alt="" />
                            </a>
                            </li>

                            <li> <a href="https://www.phenixweb.net/quiz-instagram-plus-de-50-idees-de-questions/" >
                                <img className='socialMedia' src="images/Facebook.jpg" alt="" /></a>
                            </li>

                            <li> <a href="https://www.pinterest.fr/animation_decors/quiz//" >
                                <img className='socialMedia' src="images/Pinterest.png" alt="" /></a>
                            </li>
                            {/* </div> */}
                        </ul>
                    </div>
                </div>


            </div>

            <div className="row " style={{ justifyContent: "center" }}>

                <div className="col-12 col-md-5">
                    <h5 className='m-5 text-center'> Copyright QuizzGame 2022 </h5>
                </div>
            </div>


        </footer >
    </div >
)

export default Footer;
