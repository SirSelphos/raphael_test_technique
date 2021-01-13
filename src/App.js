import React from 'react';
import logo from './assets/logo.png';
import shirt from './assets/shirt.jpg';
import belt from './assets/belt.jpg';
import ProductsCarousel from './components/Carousel.js';
import CustomizedSelector from './components/Selector.js';
import { Button } from 'antd';
import './App.css';

// Version avec classes :
// import Product from './app/product.js';
// import Showcase from './app/showcase.js';

const App = () => {
  const state = {
    selected: 1,
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

  console.log("Selected product:", showcase[state.selected-1])

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
  
  const handleChange = event => {
    const productId = event.target.value
    state.setState({selected: productId})
    console.log("Selected", state.selected)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <div>
        <ProductsCarousel products={showcase} />
        <CustomizedSelector  style={{margin: '10px'}} param={showcase[state.selected-1].sizes} title="Taille" />
        <CustomizedSelector  style={{margin: '10px'}} param={showcase[state.selected-1].colors} title="Couleur" />
        <Button type="primary"  style={{margin: '10px'}} htmlType='submit'>Ajouter au panier</Button>
      </div>
    </div>
  );
}

export default App;
