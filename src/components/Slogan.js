import React from 'react';
import '../style/Slogan.css';
import { Animated } from "react-animated-css";




const Slogan = () => {


    return (

        <Animated animationIn="flipInX" animationOut="fadeOut" isVisible={true}>
            <div className='slogan mb-5'>
                <h1>Challenger vos proches et vos amis en jouant à QuizGame !!</h1>
            </div>
        </Animated>

    );
};

export default Slogan;