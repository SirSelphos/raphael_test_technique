import React from 'react';
import { Popover, Button } from 'antd';

const Cart = (props) => {

    const { products, onClick } = props
    
    const content = (
        <div>
            {products && products.length > 0 && products.map((product) => (
                <div key={product.id} >
                    <p>                        
                        {product.title} : taille {product.size}, couleur {product.color} ({product.quantity}) <Button type="primary" value={product.id} onClick={onClick}>X</Button>                   
                    </p>
                </div>    
            ))}
            <Button type='primary'>Acheter</Button>
        </div>        
      );      

    return(
        <Popover content={content} title="Mon panier :">
            <Button type="primary">Panier ({products.length})</Button>
        </Popover>
    );
};

export default Cart;