import React, { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext(null);

// Create the provider
export const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

 
