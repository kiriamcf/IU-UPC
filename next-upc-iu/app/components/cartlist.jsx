'use client'

import { useContext } from 'react';
import UserContext from '../context/UserContext';
import Image from 'next/image'

function CartList() {

  const { userProducts, addToCart } = useContext(UserContext);

  return (
    <ul className="border-b-2 flex justify-between py-2 font-semibold">
      <li>
        Item
      </li>
      <li>
        Price
      </li>
      <li>
        Quantity
      </li>
      <li>
        Total
      </li>
    </ul>
  );
}

export default CartList;