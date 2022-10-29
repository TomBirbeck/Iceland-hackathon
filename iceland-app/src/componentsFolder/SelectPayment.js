import React from "react"
import { useState } from "react"
import CartItems from "./CartItems"
import SelectPaymentMethod from "./Select.js"
import items from "../data/data"
import "./Cart.css";
import SplitPayment from './SplitPayment'

export default function SelectPayment({split, setSplit}){
    

/*     function handleCheckBox(){
        setSplit(!split)
    } */

    return (
     <div>
      {/*   <h1>Select Payment Type </h1>
        <label>Do you want to split your payment?</label>
        <input onChange={()=>{handleCheckBox()}} type="checkbox" /> */}
        {split  && <SplitPayment />}
        <SelectPaymentMethod/>
        <div className="itemList">
             </div>
        <div className="continueContainer">
        <p className="continue">Checkout</p>
        </div>
    </div>)
}