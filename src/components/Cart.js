import React from 'react';
import { Popover, Button } from 'antd';

const Cart = (props) => {

    const { orders, onClick } = props
    
    const content = (
        <div>
            {orders && orders.length > 0 && orders.map((order) => (
                <div key={order.id}>
                    <p>                        
                        <Button value={order.id} onClick={onClick}>X</Button> {order.title} : taille "{order.size}", couleur "{order.color}" ({order.quantity})                    
                    </p>
                </div>    
            ))}
            <Button type='primary'>Acheter</Button>
        </div>        
      );      

    return(
        <Popover content={content} title="Mon panier :">
            <Button type="primary">Panier ({orders.length})</Button>
        </Popover>
    );
};

export default Cart;