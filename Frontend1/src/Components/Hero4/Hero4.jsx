import React from 'react';
import './Hero4.css';

const Hero4 = () => {
    return (
        <div className="hero4-container">
            <h1>OUR BEST</h1>
            <h2>PRODUCTS</h2>
            <div className="hero4-boxes">
                <a href="/interior-paints" className="hero4-box">Interior Paints</a>
                <a href="/exterior-paints" className="hero4-box">Exterior Paints</a>
                <a href="/primers" className="hero4-box">Primers</a>
                <a href="/finishes" className="hero4-box">Finishes</a>
            </div>
        </div>
    );
};

export default Hero4;