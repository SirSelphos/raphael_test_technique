import React from 'react';
import { Popover, Button } from 'antd';

const Cart = (props) => {

    const { cart } = props
    
    const content = (
        <div>
            {cart[0]!=="" && cart.map((product) => (
                <div key={product.id} >
                    <p>{product.title} (taille {product.size}, couleur {product.color}) | ({product.quantity}) <Button type="primary">X</Button></p>
                </div>    
            ))}
        </div>
      );      

    return(
        <Popover content={content} title="Mon panier :">
            <Button type="primary">Panier ({cart.length})</Button>
        </Popover>
    );
};

export default Cart;