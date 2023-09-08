import React from 'react';
import {Products} from "../../products";
import Product from './product';
import "./shop.css"

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle  my-4'>
        <h1  className='d-flex justify-content-center' style={{marginTop: "40px"}}>Shop Here</h1>
       <hr/>
      </div>
      <div className='row '>
        {Products.map((product)=>
           <Product data={product}/>
        )}
      </div>
    </div>
  )
}

export default Shop;