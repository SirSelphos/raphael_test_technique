import React, { useState } from 'react';
import logo from './assets/logo.png';
import shirt from './assets/shirt.jpg';
import belt from './assets/belt.jpg';
import Cart from './components/Cart';
import ProductsCarousel from './components/Carousel.js';
import CustomizedSelector from './components/Selector.js';
import { InputNumber } from 'antd';
import { Button } from 'antd';
import './App.css';

let serial = 0  
  const showcase = [
    {
      id: ++serial,
      title: "Chemise",
      picture: shirt,
      size: ["XS", "S", "M", "L", "XL", "XXL"],
      color: ["Blanc", "Bleu ciel", "Anthracite"],
      quantity: 0
    },
    {
      id: ++serial,
      title: "Ceinture",
      picture: belt,
      size: [36, 38, 40, 42, 44],
      color: ["Marron", "Noir"],
      quantity: 0
    }
  ];

const App = () => {

  const [cart, setCart] = useState([]);
  const [current, setCurrent] = useState({ id: showcase[0].id });
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [quantity, setQuantity] = useState();

  const chooseProduct = (index) => {
    const product = showcase[index]
    return setCurrent(product)
  };

  const handleSize = (value) => {
    return setSize(value)
  };

  const handleColor = (value) => {
    return setColor(value)
  };

  const handleInput = (value) => {  
    return setQuantity(value)
  };

  const handleAdd = () => {
    const products = [...cart]
    const product = showcase[current.id-1]
    product.size = size
    product.color = color
    product.quantity = quantity
    products.push(product)
    return setCart(products)
  };

  console.log("Panier:", cart)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Cart products={cart}
          className="Cart"/>
      </header>
      <div>
        <ProductsCarousel 
          products={showcase} 
          handleChange={chooseProduct}/>
        <CustomizedSelector 
          param={showcase[current.id-1].size}
          title="Taille"
          onChange={handleSize}/>
        <CustomizedSelector 
          param={showcase[current.id-1].color}
          title="Couleur"
          onChange={handleColor}/>
        <InputNumber 
          min={1} 
          defaultValue={1} 
          style={{ height: 32, width: 60 }} 
          onChange={handleInput}/>
        <Button 
          type="primary" 
          style={{margin: '10px'}} 
          onClick={handleAdd}>
          Ajouter au panier
        </Button>
      </div>
    </div>
  );
};

export default App;