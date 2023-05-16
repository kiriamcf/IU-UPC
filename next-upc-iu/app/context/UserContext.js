'use client';

import React from 'react';
import { useState } from 'react';

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [userProducts, setUserProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    setUserProducts([...cartItems, product]);

    const newTotalPrice = userProducts.map((product) => product.price).reduce((a, b) => a + b, 0);
    setTotalPrice(newTotalPrice);
  };


  return (
    <UserContext.Provider value={{ userProducts, totalPrice, setUserProducts, addToCart }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;