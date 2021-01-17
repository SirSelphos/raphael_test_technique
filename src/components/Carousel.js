import React from 'react';
import { Carousel } from 'antd';

const ProductsCarousel = (props) => {

  const { products, handleChange } = props

  const contentStyle = {
    height: '500px',
    background: '#364d79',
    selfAlign: 'center'
  };

  return (
    <Carousel afterChange={handleChange}>
      {products && products.length > 0 && products.map((product) => (
        <div key={product.id}>
          <div style={contentStyle} >
            <img src={product.picture} alt={product.title}/>
          </div>          
        </div>    
      ))}
    </Carousel>
  );
};

export default ProductsCarousel;
