import { useContext, useEffect } from 'react';
import { CartContext } from '../Context/Cart';

const Item = (props) => {
  const cart = useContext(CartContext);

  useEffect(() => {
    console.log("🛒 Updated cart items:", cart.items);
  }, [cart.items]);

  const handleAdd = () => {
    cart.setItems([...cart.items, { name: props.name, price: props.price }]);
  };

  return (
    <div className='item-card'>
      <h1>{props.name}</h1>
      <p>Price: ${props.price}</p>
      <button onClick={handleAdd}>Add To Cart</button>
    </div>
  );
};

export default Item;
