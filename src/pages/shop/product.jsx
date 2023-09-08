import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import "./shop.css"

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div key={id} className=" text-center product col-lg-4 my-4  col-sm-6 p-4 border">
      <img src={productImage} alt="imag" />
      <div className="description">
        <p>
          <b>
            {productName.length > 20
              ? `${productName.substring(0, 30)}...`
              : productName}
          </b>
        </p>
        <p>₹ {price} </p>
      </div>
      <button className="addToCartBttn btn btn-dark" onClick={()=> addToCart(id)}>
        Add to Cart {cartItemAmount> 0 && <>({cartItemAmount}) </>}
      </button>
    </div>
  );
};

export default Product;
