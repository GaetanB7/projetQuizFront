import React, { Component, useEffect, useState } from "react";
import '../style/CarouselCat.css';
import Slider from "react-slick";
import axios from "axios";
import { url } from "../services/AuthApi";

const CarouselCat = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(url+"/api/categories")
     
      .then((result) => setCategories(result.data));
      
  },[]);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="arrows next"
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="arrows prev"
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
     autoplay:true,
     autoplaySpeed:10000,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    cssEase:"linear",
    //  nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="carouselcat">
      <h2>Categories de quiz</h2>
      <Slider {...settings}>
      {
      categories.map((categories) => (
        <div key={categories.id} className="card border-0"  style={{width:"24rem"}} >
          <div className="card-top">
          <img

            className="card-img-top"
            src={categories.image}
            alt="Card image cap"
          />
          </div>
        <div className="card-bottom">
            <h4 className="card-text">{categories.titre}</h4> 
          </div>
        </div>
        // <div key={categories.id}>          
        // <img src={categories.image} alt="" />
        // <h2>{categories.titre}</h2>
        // </div>
        
      ))} </Slider>

    </div>
  );

};

export default CarouselCat;
