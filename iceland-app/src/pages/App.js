// import {Routes, Route} from 'react-router-dom'
import './App.css';
import Cart from '../componentsFolder/Cart.js'
import items from '../data/data.js'
import React from "react";


function App() {
 
  return (
    <div className="App">
      {/* <Routes> */}
        {/* <Route path='/' element={<Cart items={items}/>} /> */}
        {/* <Route path='/payment' element={<PaymentMethod />}/> */}
  <Cart items={items}/>
      {/* </Routes> */}
    </div>
  );
}

export default App;
