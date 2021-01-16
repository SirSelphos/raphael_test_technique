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

const App = () => {

  const [products, setProducts] = useState([
    {
      id: 1,
      size: "",
      color: "",
      quantity: 0
    },
    [""]
  ]);

  let serial = 0  
  const showcase = [
    {
      id: ++serial,
      title: "Chemise",
      picture: shirt,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Blanc", "Bleu ciel", "Anthracite"],
      quantity: 1
    },
    {
      id: ++serial,
      title: "Ceinture",
      picture: belt,
      sizes: [36, 38, 40, 42, 44],
      colors: ["Marron", "Noir"],
      quantity: 1
    }
  ];

  const onChange = (value) => {
    console.log("Value:", value)
  };

  const handleAdd = (product) => {
    const newCart = [...products]
    newCart[1].push(product)
    setProducts({ newCart })
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Cart cart={products[1]} className="Cart" />
      </header>
      <div>
        <ProductsCarousel products={showcase} afterChange={onChange} />
        <CustomizedSelector param={showcase[products[0].id-1].sizes} title="Taille" />
        <CustomizedSelector param={showcase[products[0].id-1].colors} title="Couleur" />
        <InputNumber min={1} defaultValue={1} style={{ height: 32, width: 60 }} />
        <Button type="primary" style={{margin: '10px'}} htmlType='submit' onSubmit={handleAdd}>Ajouter au panier</Button>
      </div>
    </div>
  );
};

export default App;