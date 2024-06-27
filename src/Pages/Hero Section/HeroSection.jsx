import React, { useEffect } from "react";
import ReactDom from "react-dom";
import './HeroSection.css'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { Helmet } from 'react-helmet';





const Herosection = () => {
  let images = [
    "https://edu.ieee.org/in-sairam-ap/wp-content/uploads/sites/1138/banner.jpg",
     "https://sairam.edu.in/wp-content/uploads/2024/04/veeramuthuvel-function-banner.png",
    "https://etedge-insights.com/wp-content/uploads/2023/08/neww.jpg",
    "https://sairam.edu.in/wp-content/uploads/2024/04/veeramuthuvel-function-banner-1.jpg"  
    
  ];

  let i = 0;
  const len = images.length;

  const slider = () => {
    const slideImg = document.getElementById("slideImg");
    if (slideImg) {
      slideImg.src = images[i];
      i = (i + 1) % len;
    }
  };

  useEffect(() => {
    const interval = setInterval(slider, 3000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <>
      <div className="banner">
        <div className="slider">
          <img src={images[0]} alt="" id="slideImg" />
        </div>
        <div className="overlay ">
          <div className="txt py-5 ">
            <h1>Our Alumni Community</h1>
            <h3 className="flex justify-center items-center py-5 pb-5 text-white text-lg ">The alumni community thrives on connection and collaboration. Together, we honor our past and build a promising future.</h3>
            <a href="">
            <button className="btn   ">Connect</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;


