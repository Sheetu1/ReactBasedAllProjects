import React, { useContext } from 'react';
import { CartContext } from '../Context/Cart';

const Cart = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className='Cart'>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <h1>Total Bill: ${total}</h1>
    </div>
  );
};

export default Cart;
