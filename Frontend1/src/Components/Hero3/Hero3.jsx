import React from 'react';
import './Hero3.css';
import { FaCheck } from 'react-icons/fa';

const Hero3 = () => {
    return (
        <div className="hero3-wrapper">
            <h1 className="hero3-title">WHY CHOOSE US</h1>
            <div className="hero3-container">
                <div className="hero3-box">
                    <FaCheck className="hero3-icon" />
                    <p>Quality Products</p>
                </div>
                <div className="hero3-box">
                    <FaCheck className="hero3-icon" />
                    <p>Timely Delivery</p>
                </div>
                <div className="hero3-box">
                    <FaCheck className="hero3-icon" />
                    <p>Customer Satisfaction</p>
                </div>
                <div className="hero3-box">
                    <FaCheck className="hero3-icon" />
                    <p>Variety of Options</p>
                </div>
            </div>
        </div>
    );
};

export default Hero3;