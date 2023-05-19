'use client';

import {FaShoppingCart} from 'react-icons/fa'
import { useContext } from 'react';
import UserContext from '../context/UserContext';


function CartIcon() {
  const { userCart } = useContext(UserContext);

  return (
    <div className='relative p-2 group'>
      <FaShoppingCart size={24} className='group-hover:text-primary' />
      <span className='absolute top-0 right-0 flex items-center justify-center rounded-full w-5 h-5 aspect-w-1 aspect-h-1 bg-primary group-hover:bg-white group-hover:text-primary border border-primary transition-colors text-xs font-semibold text-white'>
        {userCart.reduce((total, product) => total + product.quantity, 0)}
      </span>
    </div>
  );
}

export default CartIcon;