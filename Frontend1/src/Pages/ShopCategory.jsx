import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext';


const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
    const categoryProducts = all_product.filter(item => item.category === props.category);

    return (
      <div className='shop-category'>
        <img className='shopcategory-banner' src={props.banner} alt="" />
        <div className='shopcategory-description'>
          <p>{props.description}</p>
        </div>
        <div className="shopcategory-indexSort">
          <p>
            <span>
              Showing
            </span>
            {` ${categoryProducts.length} products`}
          </p>
        </div>
      </div>
    )
}

export default ShopCategory
