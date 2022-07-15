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
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <h2>hello quiz</h2>
      
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizs" element={<QuizCat />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/espace" element={<EspaceAbonne />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
