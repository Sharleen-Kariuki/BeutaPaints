import React, { useState, useRef } from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import dropdown_icon from '../Assets1/nav_dropdown.png'

function Navbar() {

    const [menu,setMenu] = useState("shop");

    const menuRef = useRef();

    const dropdown_toggle =(e) => {
        menuRef.current.classList.toggle("nav-menu-visible");
        e.target.classList.toggle("open");
    }
  return (
    <div className='navbar'>
        <div className='nav-logo'>
          <p>BEUTA PAINTS</p>
     </div> 
     <img className="nav-dropdown" onClick={dropdown_toggle} src={dropdown_icon} alt="" /> 
     <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}> <Link style={{ textDecoration: 'none'}} to = '/'>Home</Link> {menu==="shop"?<hr style={{border: '1px solid red'}}/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}> <Link style={{ textDecoration: 'none'}} to = '/product'>Products</Link>{menu==="mens"?<hr style={{border: '1px solid red'}}/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}> <Link style={{ textDecoration: 'none'}} to = '/about'>About</Link>{menu==="womens"?<hr style={{border: '1px solid red'}}/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none'}} to = '/contact'>Contact Us</Link> {menu==="kids"?<hr style={{border: '1px solid red'}}/>:<></>}</li>
     </ul>
     <div className="nav-login-cart">
          <button ><FontAwesomeIcon icon={faPhone}/> 0712761716</button>
     </div>
    </div>
  )
}

export default Navbar
