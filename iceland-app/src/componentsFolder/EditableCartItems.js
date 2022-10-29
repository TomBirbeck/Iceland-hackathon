import "./EditableCartItems.css";
import "./Cart.css";
import React from "react";
import SelectPaymentMethod from "./Select";


export default function EditableCartItems({ items }) {
  return items.map((item) => {
    return (
      <div className="item" key={item.id}>
        <div className="itemName">{item.name}</div>
        <div className="itemQuantity">{item.quantity}</div>
        <div className="itemPrice">Price: £ {item.price * item.quantity}</div>
        <input type="checkbox"/> 
            </div>
    );
  });
}
