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
      color: ["Blanc", "Bleu ciel", "Anthracite"]
    },
    {
      id: ++serial,
      title: "Ceinture",
      picture: belt,
      size: [36, 38, 40, 42, 44],
      color: ["Marron", "Noir"]
    }
  ];

const App = () => {

  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState({ id: showcase[0].id });
  const [quantity, setQuantity] = useState({ num: 1});

  const chooseProduct = (index) => {
    const product = showcase[index]
    return setCurrent(product)
  };

  const handleInput = (value) => {  
    console.log("Quantity:", value)
    return setQuantity(value)
  };

  const handleAdd = (product) => {
    const cart = [...products]
    cart.push(product)
    setProducts({ cart })
    console.log("Cart:", products)
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Cart cart={products[1]} className="Cart" /> */}
      </header>
      <div>
        <ProductsCarousel products={showcase} handleChange={chooseProduct} />
        <CustomizedSelector param={showcase[current.id-1].size} title="Taille" />
        <CustomizedSelector param={showcase[current.id-1].color} title="Couleur" />
        <InputNumber min={1} defaultValue={1} style={{ height: 32, width: 60 }} onChange={handleInput}/>
        <Button type="primary" style={{margin: '10px'}} htmlType='submit' onSubmit={handleAdd}>Ajouter au panier</Button>
      </div>
    </div>
  );
};

export default App;