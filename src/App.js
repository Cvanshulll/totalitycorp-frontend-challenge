import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";

function App() {
  return (
    <>
    <Navbar />
      <div className="container">
      
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
