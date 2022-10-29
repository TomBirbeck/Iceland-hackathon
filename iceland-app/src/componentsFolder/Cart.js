import CartItems from "./CartItems";
import React from "react";
// import { NavLink } from 'react-router-dom';
import { useState } from "react";
import SelectPayment from "./SelectPayment";
import SplitPayment from "./SplitPayment"
import "./Cart.css";

export default function Cart({ items }) {
  const [split, setSplit] = useState(false);
  const [cart, setCart] = useState(true);
  const [payment, setPayment] = useState(false)
  const [basket, setBasket]= useState([])
  const [paymentObject, setPaymentObject]= useState({})

// creating an object and adding that to an array through 
//functions passed down to the editable cart component 
// state is top level 

  function handleCheckBox(){
    setSplit(!split)
}

function handleClick(){
 setPayment(true)
 setCart(false)
}


  return (

    <div className="container">
     {cart &&  <><h1>Cart</h1>
      <div className="itemList">
        <CartItems items={items} />
        <label>Do you want to split your payment?</label>
        <input onChange={()=>{handleCheckBox()}} type="checkbox" />
      </div>
      <div className="continueContainer">
      <button onClick={()=>{handleClick()}}>Continue</button>
      </div>
      </>}
     { payment && !false && <div><SelectPayment split={split} setSplit={setSplit}/></div>}

    </div>
  );
}

// in the real world we would want to map the items, so lets make an array with title, qauntitiy and an image'
