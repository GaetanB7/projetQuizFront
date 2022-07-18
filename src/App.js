import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Connexion from './pages/Connexion';
import Contact from './pages/Contact';
import EspaceAbonne from './pages/EspaceAbonne';
import Home from './pages/Home';
import Inscription from './pages/Inscription';
import Quiz from './pages/Quiz';
import QuizCat from './pages/QuizCat';
import './style/App.css';
import Quizs from './pages/Quizs';
import Categories from './pages/Categories';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
       <div className='mt-5 col-md-10'>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizs/categorie" element={<QuizCat />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/espace" element={<EspaceAbonne />} />
          <Route path="/quizs" element={<Quizs />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
       </div>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
