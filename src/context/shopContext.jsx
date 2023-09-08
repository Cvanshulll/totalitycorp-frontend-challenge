import React, { createContext, useState } from 'react';
import {Products} from "../products";

export const ShopContext = createContext(null);


const getDefaultCart=()=>{
    let cart={}
    for (let i=1; i<Products.length+1; i++){
        cart[i]=0;
    }
    return cart;
}


const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = ()=>{
      let totalAmt = 0;
      for (const item in cartItems){
        if(cartItems[item]>0){
          let itemInfo = Products.find((product)=>product.id === Number(item));
          totalAmt += cartItems[item] * itemInfo.price;
        }
      }

      return totalAmt;
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      };
    
      const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      };

      const updateCartItemCount = (newAmount, itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]: newAmount}));
      }
    

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount};

    // console.log(cartItems);

    

  return (
    <div>
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    </div>
  )
}

export default ShopContextProvider