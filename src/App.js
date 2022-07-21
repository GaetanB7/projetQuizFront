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



function App() {
  return (
    <div className="App">
      <BrowserRouter>    
          
        <Navigation />
       <div className='mt-5 container-fluid'>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorie/categorie/id" element={<QuizCat />} />
          <Route path="/quizs/categorie" element={<QuizCat />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/espace" element={<EspaceAbonne />} />
          <Route path="/quizs" element={<Quizs />} />
          <Route path="/quiz/:id" element={<QuizJouer />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
       </div>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
