import React from 'react';
import logo from './assets/logo.png';
import shirt from './assets/shirt.jpg';
import belt from './assets/belt.jpg';
import ProductsCarousel from './components/Carousel.js';
import CustomizedSelector from './components/Selector.js';
import { InputNumber } from 'antd';
import { Button } from 'antd';
import './App.css';

// Version avec classes :
// import Product from './app/product.js';
// import Showcase from './app/showcase.js';

const App = () => {
  let state = {
    selected: 1,
    quantity: 0,
    basket: []
  }
  let serial = 0
  const showcase = [
    {
      id: toString(++serial),
      title: "Chemise",
      picture: shirt,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Blanc", "Bleu ciel", "Anthracite"],
    },
    {
      id: toString(++serial),
      title: "Ceinture",
      picture: belt,
      sizes: [36, 38, 40, 42, 44],
      colors: ["Marron", "Noir"]
    }
  ]

  /* Version avec classes :
  let showcase = new Showcase([
    new Product(
      "Chemise",
      shirt,
      ["XS", "S", "M", "L", "XL", "XXL"],
      ["Blanc", "Bleu ciel", "Anthracite"]
      ),
    new Product(
      "Ceinture",
      belt,
      [36, 38, 40, 42, 44],
      ["Marron", "Noir"]
    )])
  console.log("Showcase", showcase)
  */
 
  function onChange(value) {
    const num = value
    state.setState({quantity: num})
    console.log(`Quantity: ${state.quantity}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <div>
        <ProductsCarousel products={showcase} />
        <CustomizedSelector param={showcase[state.selected-1].sizes} title="Taille" />
        <CustomizedSelector param={showcase[state.selected-1].colors} title="Couleur" />
        <InputNumber min={1} defaultValue={1} onChange={onChange} />
        <Button type="primary" style={{margin: '10px'}} htmlType='submit'>Ajouter au panier</Button>
      </div>
    </div>
  );
}

export default App;