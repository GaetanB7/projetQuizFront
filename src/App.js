import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Connexion from './pages/Connexion';
import Contact from './pages/Contact';
import EspaceAbonne from './pages/EspaceAbonne';
import Home from './pages/Home';
import Inscription from './pages/Inscription';
import QuizCat from './pages/QuizCat';
import './style/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
import Quizs from './pages/Quizs';
import Categories from './pages/Categories';
import QuizJouer from './pages/QuizJouer';
import Cgu from './pages/Cgu';
import Carousel from './components/Carousel';
import React, { useState } from "react";
import { hasAuthenticated } from './services/AuthApi';
import Auth from './Contexts/Auth';




function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());

  console.log("Auth : "+isAuthenticated)
  return (
    <div className="App">
      <Auth.Provider value={{isAuthenticated, setIsAuthenticated}} >
      <BrowserRouter>    
          
        <Navigation />
       <div className=' container-fluid'>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorie/categorie/id" element={<QuizCat />} />
          <Route path="/quizs/categorie" element={<QuizCat />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/espace" element={<EspaceAbonne />} /> */}
          <Route path="/quizs" element={<Quizs />} />
          <Route path="/quiz/:id" element={<QuizJouer />} />
          <Route path="/quiz/contact" element={<Contact />} />
          <Route path='/quiz/cgu' element={<Cgu />}/>
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<Home />} />

        {isAuthenticated ? (
        <Route path="/espace" element={<EspaceAbonne />} />
    ) : (
        <Route to="/connexion" />
    )}


          <Route path="/test" element={<Carousel />} />
        </Routes>

       </div>
       <Footer/>
      </BrowserRouter>
      </Auth.Provider>
    </div>
  );
}

export default App;
