import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
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
import React, { useEffect, useState } from "react";
import { hasAuthenticated, isAdmin } from './services/AuthApi';
import Auth from './Contexts/Auth';
import EspaceAdmin from './pages/EspaceAdmin';




function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  const [isAdministrator, setIsAdministrator] = useState(isAdmin());
  const location = useLocation();
  const path = location.pathname;
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    (path == "/admin") ? setDisplay(true) : setDisplay(false)
  }, [path]);

  console.log("admin "+isAdministrator)
  console.log("Auth : "+isAuthenticated)
  console.log("path : "+path)
  console.log("display : "+display)
  return (
    <div className="App">
      <Auth.Provider value={{isAuthenticated, setIsAuthenticated, isAdministrator, setIsAdministrator}} >
      {/* <BrowserRouter>     */}
          
        <Navigation />
       <div className=' '>
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

        {isAuthenticated ? 
        (
          isAdministrator?
          (<Route path='/admin' element={<EspaceAdmin />}/>)
        : (<Route path="/espace" element={<EspaceAbonne />} />)
        ) 
    : (
        <Route to="/connexion" />
    )}


          <Route path="/test" element={<Carousel />} />
        </Routes>

       </div>
       {display ? null :<Footer/> }
      {/* </BrowserRouter> */}
      </Auth.Provider>
    </div>
  );
}

export default App;
