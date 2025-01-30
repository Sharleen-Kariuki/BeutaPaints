import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import arrow_icon from '../Assets1/arrow.png';


const Hero = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate('/hero4');
  };
 


  return (
    <div className='hero'>
      <div className="hero-right">
      </div>
      <div className="hero-left">
        <h2>WE PROVIDE YOU</h2>
        <div>
          <div className="hero-hand-icon">
            <p>WITH THE CREME DE LA CREME</p>
          </div>
          <p>PAINTS IN</p>
          <p>TOWN</p>
        </div>
        <button className="hero-latest-btn" onClick={handleReadMoreClick} >
          <div>Read More</div>
          <img src={arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;