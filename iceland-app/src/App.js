
import './App.css';
import Cart from './componentsFolder/Cart';
import items from './data/data';
import React from "react";



function App() {
  return (
    <div className="App">
    <Cart items={items}/>
    </div>
  );
}

export default App;
