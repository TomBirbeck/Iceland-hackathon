import "./CartItem.css";
import React from "react";


export default function CartItems({ items }) {
  return items.map((item) => {
    return (
      <div className="item" key={item.id}>
        <div className="itemName">{item.name}</div>
        <div className="itemQuantity">{item.quantity}</div>
        <div className="itemPrice">Price: £ {item.price * item.quantity}</div>
      </div>
    );
  });
}
