import {Routes, Route} from 'react-router-dom'
import './App.css';
import Cart from '../componentsFolder/Cart.js'
import items from '../data/data.js'
import React from "react";

<Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Cart items={items}/>} />
        <Route part='/' element={}/>
    // <Cart items={items}/>
      </Routes>
    </div>
  );
}

export default App;
