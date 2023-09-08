import React, { useContext } from 'react';
import { ShopContext } from "../../context/shopContext";
import "./cart.css";
import {Plus, Minus} from "phosphor-react"


const CardItem = (props) => {

  const {cartItems, addToCart, removeFromCart, updateCartItemCount}=useContext(ShopContext);
    const {id, productName, price, productImage} = props.data;

  return (
    <div key ={id} className='cartItem text-center col-lg-4 my-4  col-sm-6 p-4 border'>
        <img src={productImage} alt="imggg" />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>₹ {price}</p>
        </div>
        <div className='countHandler'>
          <button className='me-2' onClick={()=> removeFromCart(id)}><Minus size={32} /></button>
          <input  className='me-2'  style={{width:"40px"}} value={cartItems[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value), id)} />
          <button onClick={()=> addToCart(id)}><Plus size={32} /></button>
        </div>
    </div>
  )
}

export default CardItem