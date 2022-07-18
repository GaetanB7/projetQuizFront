import React from 'react';
import CarouselCat from '../components/CarouselCat';
import Avis from '../components/Avis';
import BestQuiz from '../components/BestQuiz';
import Slogan from '../components/Slogan';
import '../style/Footer.css';


const Home = () => {
    return (
       

        <div className='col-md-10 m-5'>
            <Slogan />
            <BestQuiz/> 
            <CarouselCat />
            <Avis/>
            
            
            

            </div>
    );
};

export default Home;