import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";

const Checkout = () => {

    const {getTotalCartAmount } = useContext(ShopContext);
  const totalAmt = getTotalCartAmount();




  return (
    <div className="cart  text-center">
      <div className="my-3">
        <h1  style={{ marginTop: "40px" }}>Checkout</h1>
        {/* <hr /> */}
      </div>
      <div className="card text-start m-4">
        <form className="p-4">
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Total Amount: <pan className="h6">₹ {totalAmt}</pan>
            </label>
          </div>
          <div class="mb-3 ">
            <label for="exampleInputEmail1" class="form-label">
              Email address <span style={{color:"red"}}>*</span>
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3 ">
            <label for="exampleInputEmail1" class="form-label">
              Phone Number <span style={{color:"red"}}>*</span>
            </label>
            <input
              type="tel" required
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Address <span style={{color:"red"}}>*</span>
            </label>
            <textarea
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>

          <button type="submit" class="btn btn-primary" >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
