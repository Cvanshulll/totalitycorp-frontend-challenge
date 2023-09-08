import React from 'react';
import {Link} from 'react-router-dom';
import {House, ShoppingCart} from 'phosphor-react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar '>
        <div className='links'>
            <Link to="/"><House size={32} /></Link>
            <Link to="/cart"><ShoppingCart size={32}/></Link>
        </div>
    </div>
  )
}

export default Navbar