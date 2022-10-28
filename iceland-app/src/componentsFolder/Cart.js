import CartItems from "./CartItems";
import React from "react";


export default function Cart({ items }) {
  return (
    <div className="container">
      <h1>Cart</h1>
      <div>
        <CartItems items={items} />
      </div>
      <p>continue</p>
    </div>
  );
}

// in the real world we would want to map the items, so lets make an array with title, qauntitiy and an image'
