import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';







const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
          <Link to="/">Shop</Link>
          <Link to="/cart"> 
          <FaShoppingCart size={32} /> 
          </Link>

        </div>
    </div>
  )
}

export default Navbar