import React from 'react';
import { Carousel } from 'antd';

const ProductsCarousel = (props) => {

  const { products } = props
    
  function onChange() {
    
  }

  const contentStyle = {
    height: '500px',
    background: '#364d79'
  };

  return (
    <Carousel afterChange={onChange}>
      {products.map((product) => (
        <div  key={product.id} >
          <div style={contentStyle} >
            <img src={product.picture} alt={product.title} />
          </div>          
        </div>    
      ))}
    </Carousel>
  );
}

export default ProductsCarousel;
