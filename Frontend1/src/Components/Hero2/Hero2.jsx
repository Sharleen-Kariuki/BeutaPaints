import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Hero2.css'
import arrow_icon from '../Assets1/arrow.png'



const Hero2 = () => {
    const navigate = useNavigate();

    const handleReadMoreClick = () => {
      navigate('/about', { replace: true });
      window.scrollTo(0, 0);
    };
   
  
    
  return (
    
       <div className='hero2'>
              <div className="hero2-left">
                  <div className="hero2-latest-text">
                          <h1>ABOUT US</h1>
                      <p className='hover'>Welcome to Beuta Paints Company, where expertise meets excellence. With decades of experience in the industry, we are proud to be a trusted leader in delivering top-quality paint products and services. Our commitment to integrity and reliability ensures that we provide our clients with the finest solutions tailored to their specific needs.</p>
                      
                  </div>
                  <button className="hero2-latest-btn" onClick={handleReadMoreClick}>
                      <div>Read More</div>
                      <img src={arrow_icon} alt="" />
                  </button>
              </div>
              <div className="hero2-right">
                  
              </div>
          </div>
  )
}

export default Hero2
