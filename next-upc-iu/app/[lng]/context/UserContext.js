'use client';

import React from 'react';
import { useState } from 'react';

const UserContext = React.createContext();

export const UserProvider = ({ children, cart}) => {
  const [userCart, setUserCart] = useState(cart);
  const [totalPrice, setTotalPrice] = useState(0);

  /* const addToCart = (product) => {
    setuserCart([...cartItems, product]);

    const newTotalPrice = userCart.map((product) => product.price).reduce((a, b) => a + b, 0);
    setTotalPrice(newTotalPrice);
  }; */


  return (
    <UserContext.Provider value={{ userCart, totalPrice, setUserCart, setTotalPrice }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;