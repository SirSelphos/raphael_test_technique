import { Carousel } from 'antd';

const ProductsCarousel = (props) => {

    const { products } = props
      
    function onChange(a, b, c) {
      console.log(a, b, c);
    }

    const contentStyle = {
      height: '520px',
      background: '#364d79',
      
    };

    return (
      <Carousel afterChange={onChange}>
        {products.map((product) => (
          <div key={product.id} >
            <div style={contentStyle} >
              <img src={product.picture} alt={product.id} />
            </div>            
          </div>          
        ))}
      </Carousel>
    );
}

export default ProductsCarousel;
