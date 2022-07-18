import React from 'react';
import CarouselCat from '../components/CarouselCat';
import Avis from '../components/Avis';
import BestQuiz from '../components/BestQuiz';


const Home = () => {
    return (
        <div>
            <h2>home</h2>
           
            <BestQuiz/> 
            <CarouselCat />
            <Avis/>
        </div>
    );
};

export default Home;