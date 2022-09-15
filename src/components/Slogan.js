import React from 'react';
import '../style/Slogan.css';
import { Animated } from "react-animated-css";




const Slogan = () => {


    return (

        <Animated animationIn="flipInX " animationOut="fadeOut" isVisible={true}>
            <div className='slogan'>
                <h1 className='animate__backInLeft'>Challenger vos proches et vos amis en jouant à QuizGame !!</h1>
            </div>
        </Animated>

    );
};

export default Slogan;