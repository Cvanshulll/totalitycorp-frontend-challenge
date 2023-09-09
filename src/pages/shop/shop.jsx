import React, { useState } from "react";
import { Products } from "../../products";
import Product from "./product"; 
import "./shop.css";

const Shop = () => {
  const [productNameFilter, setProductNameFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const filteredProducts = Products.filter((product) => {
    // Check if the product name contains the filter text (case-insensitive)
    const productNameMatches = product.productName
      .toLowerCase()
      .includes(productNameFilter.toLowerCase());

    // Check if the product price is less than or equal to the filter price (if a price filter is set)
    const priceMatches =
      !priceFilter || product.price <= parseFloat(priceFilter);

    // Return true if both conditions are met
    return productNameMatches && priceMatches;
  });

  const handleProductNameChange = (event) => {
    setProductNameFilter(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPriceFilter(event.target.value);
  };

  return (
    <div className="shop">
      <div className="shopTitle my-4">
        <h1
          className="d-flex justify-content-center"
          style={{ marginTop: "40px" }}
        >
          Shop Here
        </h1>
        <hr />
      </div>
      <div className="search">
        <h4 className="my-4 ">Search By: </h4>
        <div className="row">
          <div className="col">
            <label className="me-2 ">
              <b>Product</b>
            </label>
            <input
              className=" me-4"
              type="text"
              value={productNameFilter}
              onChange={handleProductNameChange}
            />
          </div>
          <div className="col">
            <label className="me-2 ">
              <b>Price (&#8804;)</b>
            </label>
            <input
              type="number"
              value={priceFilter}
              onChange={handlePriceChange}
            />
          </div>
        </div>
      </div>
      <div className="row mt-4 pt-2">
        {filteredProducts.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
