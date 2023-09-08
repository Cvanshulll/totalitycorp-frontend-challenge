import React, { useContext } from 'react';
import { Products } from '../../products';
import { ShopContext } from "../../context/shopContext";
import CardItem from './cardItem';



const Cart = () => {

  const {cartItems}=useContext(ShopContext);
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {Products.map((product)=>{
          if (cartItems[product.id]!==0){
            return <CardItem data ={product} />
          }
          return <></>
        })}
      </div>
    </div>
  )
}

export default Cart