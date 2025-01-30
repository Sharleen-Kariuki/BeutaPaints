import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductDisplay.css';

const ProductDisplay = (props) => {
  const { product } = props;
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/contact');
  };

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
              Ksh. {product.price}
            </div>
            <div className="productdisplay-right-description">
              {product.description}
            </div>
            <div className="productdisplay-right-sizes">
              <h1>Sizes Available</h1>
              <div className="productdisplay-right-size">
                <div>500ml</div>
                <div>2L</div>
                <div>4L</div>
                <div>10L</div>
                <div>20L</div>
              </div>
            </div>
            <div className="productdisplay-order-button">
              <button onClick={handleOrderClick}>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;