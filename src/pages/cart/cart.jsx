import React, { useContext } from "react";
import { Products } from "../../products";
import { ShopContext } from "../../context/shopContext";
import CardItem from "./cardItem";
// import "./cart.css";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmt = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="cart  text-center">
      <div>
        <h1 style={{ marginTop: "40px" }}>Your Cart Items</h1>
        <hr />
      </div>
      <div className="cartItems row">
        {Products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CardItem data={product} />;
          }
          return <></>;
        })}
      </div>

      {totalAmt > 0 ? (
        <div className="checkout my-4 pt-4">
          <p> Subtotal: Rs.{totalAmt}</p>
          <button className="btn btn-dark me-3" onClick={() => navigate("/")}>Continue Shopping</button>
          <button className="btn btn-dark">Checkout</button>
        </div>
      ) : (
        <h3 style={{ margin: "20px" }}>Your cart is Empty!</h3>
      )}
    </div>
  );
};

export default Cart;
